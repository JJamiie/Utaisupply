module.exports = function(app, db, passport) {
  app.get("/", function(req, res, next) {
    res.render("main", {});
  });

  let restApiRoute = require("./restapi/index.route")(passport);
  app.use('/api', restApiRoute);

  // Handle Admin check routes
  require("./admin")(app, passport);

  // Handle errors
  require("./errors")(app);
};
