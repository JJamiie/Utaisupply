"use strict";
var mongoose = require("mongoose");

module.exports = function() {
  var mongoDB = "mongodb://localhost/utaisupply";
  mongoose.connect(mongoDB, {useMongoClient: true });

  //Get the default connection
  var db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", function() {
    console.log("Connect to mongo");
  });

  require("./seed-db")();		
};
