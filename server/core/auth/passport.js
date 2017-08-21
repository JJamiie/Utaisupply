"use strict";

let logger 			= require("../logger");
let config 			= require("../../config");

let path 			= require("path");
let chalk 			= require("chalk");

var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/user');

module.exports = function(app , passport) {
  // Use passport session
	app.use(passport.initialize());
  app.use(passport.session());	
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('login', new LocalStrategy({
      passReqToCallback: true
    },
    function(req, username, password, done) {
      User.findOne({
        username: username
      }, function(err, user) {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (!user) {
          console.log('Incorrect username.');
          return done(null, false, req.flash('message', 'Incorrect username.'));
        }
        if (!user.isValidPassword(password)) {
          console.log('Incorrect password.');
          return done(null, false, req.flash('message', 'Incorrect password.'));
        }
        return done(null, user);
      });
    }
  ));
}
