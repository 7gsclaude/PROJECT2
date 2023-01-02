const express = require("express");
const router = express.Router();
const Store = require("../models/storeModel");

///todo change all the locations so that it will match store/gasandnectar? 


//induces
//i ////STORE index page, all the other parts of this file should be hidden for users thatt do not have tthe login i create at thhe end
router.get("/gasandnectar/", (req, res) => {
  Store.find(req.params.id, (err, store) => {
    res.render("store/index.ejs", { store });
  });
});

//n
router.get("/gasandnectar/new", (req, res) => {
  res.render("store/new.ejs"); //render does not need to have the / in order for it to work
});

// //d
// router.delete("/gasandnectar/:id", (req, res) => {
//   //labeling gas adn nectar in the route in order to target where the deletion is happening
//   Event.findByIdAndRemove(req.params.id, () => {
//     res.redirect("/events/gasandnectar");
//   });
// });

// //u
// router.put("/gasandnectar/:id", (req, res) => {
//   Event.findByIdAndUpdate(req.params.id, req.body, () => {
//     res.redirect("/events/gasandnectar"); // update route needs to match the landing of whwere the data needs to go
//   });
// });

// //c
// router.post("/gasandnectar", (req, res) => {
//   //TODO 1.1.23 fix edit delete and new routes. edit needs a destination, delete isnt working, and new hasnt been created
//   Event.create(req.body, (err, event) => {
//     res.redirect("/events/gasandnectar");
//     console.log(event);
//   });
// });

// //e
// router.get("/gasandnectar/:id/edit", (req, res) => {
//   Event.findById(req.params.id, (err, event) => {
//     res.render("events/edit.ejs", { event });
//   });
// });

// //s
// router.get("/gasandnectar/:id", (req, res) => {
//   Event.findById(req.params.id, (err, event) => {
//     res.render("events/show.ejs", { event });
//   });
// });

// // exports

module.exports = router;
