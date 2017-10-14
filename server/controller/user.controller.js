"use strict";

let User = require("../models/user");

function list(req, res, next) {
    User.find({}, function(err, objs) {
    res.json(objs);
  });
}

module.exports = { list };
