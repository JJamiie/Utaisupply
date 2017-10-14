module.exports = function(passport) {
  let express = require("express");
  let portfolioCtrl = require("../../controller/portfolio.controller.js");

  let router = express.Router();

  router
    .route("/")
    /** GET /api/portfolio - Get list of portfolios */
    .get(portfolioCtrl.list)
    /** POST /api/portfolio - Create new portfolio */
    .post(
      passport.authenticate("basic", { session: false }),
      portfolioCtrl.create
    );

  router
    .route("/:portfolioId")
    .get(portfolioCtrl.get)
    /** Put /api/portfolio/:inventorId - Update portfolio */
    .put(passport.authenticate("basic", { session: false }), portfolioCtrl.update)
    /** Delete /api/portfolio/:inventorId - Delete portfolio */
    .delete(
      passport.authenticate("basic", { session: false }),
      portfolioCtrl.remove
    );

  router
    .route("/:portfolioId/uploadImage")
    .post(
      passport.authenticate("basic", { session: false }),
      portfolioCtrl.uploadImage
    );

  router
    .route("/:portfolioId/removeImage")
    .post(
      passport.authenticate("basic", { session: false }),
      portfolioCtrl.removeImage
    );
  return router;
};
  