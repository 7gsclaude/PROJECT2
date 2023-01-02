const express = require('express');
const router = express.Router(); 
const Event = require("../models/eventModel");


//induces
//i ////EVENT index page, all the other parts of this file should be hidden for users thatt do not have tthe login i create at thhe end

router.get("/gasandnectar", (req, res) => {
  ///todo write out models
  Event.find(req.params.id, (err, event) => {
    res.render("events/index.ejs", { event });
  });
});




///////////////// leaving it naked until i figure out how to integrate more files  

//n
router.get('/gasandnectar/new', (req, res) => {
  Event.find({}, (err, event) => {
    res.render('events/new.ejs')
  })
})



//d 
router.delete("/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id, () => {
    res.redirect("event/gasandnectar");
  });
});

//u
router.put("/:id", (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("event/gasandnectar");
  });
});


//c
router.post("/gasandnectar/", (req, res) => { //TODO 1.1.23 fix edit delete and new routes. edit needs a destination, delete isnt working, and new hasnt been created 
  Event.create(req.body, (err, event) => {
    res.redirect("event/gasandnectar/");
  });
});

//e
router.get("/gasandnectar/:id/edit",(req, res) => {
    Event.findById(req.params.id, (err, event) => {
      res.render("events/edit.ejs", { event });
    });
  }
);


//s
router.get("/gasandnectar/:id",(req, res) => {
    Event.findById(req.params.id, (err, event) => {
      console.log(event); //will populate author into object
      res.render(
        "events/show.ejs",
        { event }
      );
    });
  }
);
    
    



// exports

module.exports = router; 