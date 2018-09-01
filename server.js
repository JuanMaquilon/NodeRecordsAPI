// BASE SETUP
// ===========================================
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/records");

var Record = require("./app/models/records");

// call the packages we need
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// configure app to use bodyParser()
// this will let us get the data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set our port

//ROUTES for our API
//==============================================
var router = express.Router(); //get an instance of the express Router

// Midleware to use for all requests
// We can do validations to make sure that everything coming from a rquest is
// safe and sound. We can throw errors here in case something is wrong. We can
// do something extra logging for analytics or any statistics we'd like to keep.
router.use(function(req, res, next) {
  // do logging
  console.log("Request URL -->", req.method, req.url);
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure that everything is working (accesed at GET http://localhost:8080/api)
router.get("/", function(req, res) {
  res.json({ message: "Welcome to our records API" });
});

// Register our routes -------------------------------
// All of our routes will be prefixed with /api
app.use("/api", router);

// Start the server
app.listen(port);
console.log("running --> localhost port " + port);
