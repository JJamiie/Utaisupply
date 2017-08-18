"use strict";

let db = require("./core/mongo")();
let app = require("./core/express")(db);

module.exports = app;
