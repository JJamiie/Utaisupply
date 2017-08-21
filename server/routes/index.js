module.exports = function(app, db, passport) {
  app.get("/", function(req, res, next) {
    res.render("main", {});
  });

  // Handle Admin check routes
  require("./admin")(app, db, passport);

  // Handle errors
  require("./errors")(app, db, passport);
};
