module.exports = function(app, passport) {
  app.get("/admin", function(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect("/admin/home");
    } else {
      res.render("admin/login", {
        message: req.flash("message")
      });
    }
  });

  app.get("/admin/home", isLoggedIn, function(req, res, next) {
    res.render("admin/home", {});
  });

  app.get("/admin/logout", function(req, res) {
    req.logout();
    res.redirect("/admin");
  });

  app.post(
    "/admin/login",
    passport.authenticate("login", {
      successRedirect: "/admin/home",
      failureRedirect: "/admin",
      failureFlash: true
    })
  );
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash("message", "Please login first");
  res.redirect("/admin");
}
