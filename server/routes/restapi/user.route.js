module.exports = function(passport) {
  let express = require("express");
  let userCtrl = require("../../controller/user.controller.js");

  let router = express.Router();

  /** GET /api/users - Get list of users */
  router.route("/").get(userCtrl.list);
  return router;
};
  