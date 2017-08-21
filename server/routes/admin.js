module.exports = function(app, db, passport) {
  app.get("/ut-admin", function(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect("ut-admin/home");
    } else {
      res.render("admin/login", {
        message: req.flash("message")
      });
    }
  });

  app.post(
    "/ut-admin/login",
    passport.authenticate("login", {
      successRedirect: "/ut-admin/home",
      failureRedirect: "/ut-admin",
      failureFlash: true
    })
  );

  app.get("/ut-admin/home", isLoggedIn, function(req, res, next) {
    res.render("admin/home", {});
  });

  app.get("/ut-admin/logout", function(req, res) {
    req.logout();
    res.redirect("/ut-admin");
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash("message", "Please login first");
  res.redirect("/ut-admin");
}
