"use strict";

module.exports = function(passport) {
  let express = require("express");
  const router = express.Router();

  let userRoute = require("./user.route")(passport);
  let portfolioRoute = require("./portfolio.route")(passport);
  let categoryRoute = require("./category.route");

  router.use("/user", userRoute);
  router.use("/portfolio", portfolioRoute);
  router.use("/category", categoryRoute);

  return router;
};
