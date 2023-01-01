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
//d
//u
//c
//e
//s
router.get(
  "/gasandnectar/:id",
  (req, res) => {
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