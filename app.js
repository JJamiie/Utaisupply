var express = require('express');
var app = express();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash  = require('connect-flash');

/************************* Config  ***************************/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

/************************* Config Database ***************************/

var mongoose = require('mongoose');
var User = require('./models/user');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/utaisupply';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;

var a = User.findOne({
  'username': 'utaisupply'
}, function(err, obj) {
  if (obj === null) {
    var adminUser = new User({
      username: 'utaisupply',
      password: '@Utaisupply2017!'
    });
    adminUser.save(function(err) {
      if (err) throw err;
    });
  }
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
});

/********************************************************************/

var passport = require('passport');
var expressSession = require('express-session');
require('./config/passport')(passport);

app.use(expressSession({ secret: 'Utaisupply' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // Use connect-flash for flash messages stored in session

require('./routes/routes')(app,passport);
module.exports = app;
