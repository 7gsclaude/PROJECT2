require("dotenv").config();

//___________________
//Dependencies
//___________________
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

const Event = require("./models/eventModel");
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error / success error handling 
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongod connected ")); //remembeer to delte uri if its there 
db.on("disconnected", () => console.log("mongod disconnected"));

//___________________
//Middleware
//___________________

app.set("view engine", "ejs");

//use public folder for static assets
app.use(express.static("public"));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
//app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form

///app controllers 
const eventController = require("./controllers/events");
app.use('/events', eventController);
///ill probably need one for the buy page too but thats cool. TODO buy page interegration 



//link to the homepage, homepage
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//___________________
// Routes
//___________________


//n
app.get('/gasandnectar/new', (req, res) => {
  Event.find({}, (err, event) => {
    res.render('events/new.ejs')
  })
})

//d 
app.delete("/gasandnectar/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id, () => {
    res.redirect("/gasandnectar");
  });
});

//u
app.put("/:id", (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/gasandnectar");
  });
});

//c
app.post("/gasandnectar", (req, res) => {
  Event.create(req.body, (err, event) => {
    res.redirect("/gasandnectar");
  });
});

//e
app.get("/gasandnectar/:id/edit", (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    res.render("events/edit.ejs", {event});
  });
});

//s
app.get(
  "/Users/claudeallen/Desktop/GAProjects/PROJECT2/views/events/:id",
  (req, res) => {
    Event.findById(req.params.id, (err, event) => {
      console.log(event); //will populate author into object
      res.render("events/show.ejs", { event });
    });
  }
);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log("express is listening on:", PORT));
