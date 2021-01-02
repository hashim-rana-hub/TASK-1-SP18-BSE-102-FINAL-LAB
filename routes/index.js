var express = require('express');
var router = express.Router();
var Items = require("../model/Item");


/* GET home page. */

router.get('/home', function(req, res, next) {
  res.render("home");
  // next();
});

router.get('/employee', async function(req, res, next) {
  let lists = await Items.find();
  // console.log(items);
  res.render("Items/item-list-employee", {lists});
});

router.get('/sign-in', async function(req, res, next) {
  res.render("sign-in-up/sign-in");
});

router.get('/sign-up', async function(req, res, next) {
  res.render("sign-in-up/sign-up");
});

// employeee

router.get('/sign-in-employee', async function(req, res, next) {
  res.render("sign-in-up/employee-sign-in");
});

router.get('/sign-up-employee', async function(req, res, next) {
  res.render("sign-in-up/employee-sign-up");
});

module.exports = router;
