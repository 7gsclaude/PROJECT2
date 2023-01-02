const express = require("express");
const router = express.Router();
const Store = require("../models/storeModel");

///todo change all the locations so that it will match store/gasandnectar? 
// set up routes 


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

//d
router.delete("/gasandnectar/:id", (req, res) => {
  //labeling gas adn nectar in the route in order to target where the deletion is happening
  Store.findByIdAndRemove(req.params.id, () => {
    res.redirect("/store/gasandnectar");
  });
});

//u
router.put("/gasandnectar/:id", (req, res) => {
  Store.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/store/gasandnectar"); // update route needs to match the landing of whwere the data needs to go
  });
});

//c
router.post("/gasandnectar", (req, res) => {
  //TODO 1.1.23 fix edit delete and new routes. edit needs a destination, delete isnt working, and new hasnt been created
  Store.create(req.body, (err, store) => {
    res.redirect("/store/gasandnectar");
    console.log(store);
  });
});

//e
router.get("/gasandnectar/:id/edit", (req, res) => {
  Store.findById(req.params.id, (err, store) => {
    res.render("store/edit.ejs", { store });
  });
});

//s
router.get("/gasandnectar/:id", (req, res) => {
  Store.findById(req.params.id, (err, store) => {
    res.render("store/show.ejs", { store });
  });
});

// // exports

module.exports = router;
