var router = function(app, passport) {
  app.get('/', function(req, res, next) {
    res.render('index', {});
  });

  app.get('/contact', function(req, res) {
    res.render('contact', {});
  });

  app.get('/product', function(req, res) {
    res.render('product', {});
  });

  app.get('/service', function(req, res) {
    res.render('service', {});
  });

  app.get('/portfolio', function(req, res) {
    res.render('portfolio', {});
  });


  // Admin

  app.get('/ut-admin', function(req, res, next) {
    console.log(req.flash('info'));
    if (req.isAuthenticated()){
      res.redirect('ut-admin/home');
    }else{
      res.render('login', {
        message: req.flash('message')
      });
    }
  });

  app.post('/ut-admin/login', passport.authenticate('login', {
    successRedirect: '/ut-admin/home',
    failureRedirect: '/ut-admin',
    failureFlash: true
  }));

  app.get('/ut-admin/home', isLoggedIn ,function(req, res, next) {
    res.render('admin-home', {});
  });

  app.get('/ut-admin/logout', function(req, res) {
		req.logout();
		res.redirect('/ut-admin');
	});


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

}

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
  req.flash('message', 'Please login first');
	res.redirect('/ut-admin');
}

module.exports = router;
