"use strict";

let Category = require("../models/category");


function list(req, res, next) {
  Category.find({}, function(err, objs) {
    res.json(objs);
  });
}

module.exports = { list };
