const express = require('express');
const router = express.Router(); 
const Event = require("../models/eventModel");


//induces
//i ////EVENT index page, all the other parts of this file should be hidden for users thatt do not have tthe login i create at thhe end
router.get("/gasandnectar", (req, res) => {
  Event.find(req.params.id, (err, event) => {
    res.render("events/index.ejs", { event });
  });
});

//n
router.get('/gasandnectar/new', (req, res) => {
  res.render("events/new.ejs"); //render does not need to have the / in order for it to work  
})

//d 
router.delete("/gasandnectar/:id", (req, res) => { //labeling gas adn nectar in the route in order to target where the deletion is happening 
  Event.findByIdAndRemove(req.params.id, () => {
    res.redirect("/events/gasandnectar");
  });
});

//u
router.put("/gasandnectar/:id", (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/events/gasandnectar"); // update route needs to match the landing of whwere the data needs to go
  });
});

//c
router.post("/gasandnectar", (req, res) => { 
    Event.create(req.body, (err, event) => {
        res.redirect("/events/gasandnectar");
        console.log(event);
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
      res.render(
        "events/show.ejs",
        { event }
      );
    });
  }
);
    
    



// exports

module.exports = router; 