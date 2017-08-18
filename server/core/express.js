'use strict';

let express = require("express");
let http = require("http");
let path = require("path");
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let flash  = require('connect-flash');
let passport = require('passport');
let expressSession = require('express-session');
let debug = require('debug')('utaisupply:server');
let port = normalizePort(process.env.PORT || "4000");
let server;

function initMiddleware(app){
    app.set("port", port);
    console.log("Express listening on port 4000");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));
    app.use(cookieParser());
    // Use connect-flash for flash messages stored in session
    app.use(flash()); 
}

function initViewEngine(app){
    app.use(express.static(path.join(__dirname, '../public')));
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
}

function initSession(app,db){
    app.use(expressSession({ secret: 'Utaisupply' }));
}

function initAuth(app) { 
    require('../config/passport')(passport);
    app.use(passport.initialize());
    app.use(passport.session());
    return passport;
}

function initWebpack(app){
  if (!config.isProductionMode()) {
		let webpack	 = require("webpack");
		let wpConfig = require("../../build/webpack.dev.config");

		let compiler = webpack(wpConfig);
		let devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
		app.use(devMiddleware(compiler, {
			noInfo: true,
			publicPath: wpConfig.output.publicPath,
			headers: { "Access-Control-Allow-Origin": "*" },
			//stats: 'errors-only'
			stats: {colors: true}
		}));

		let hotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
		app.use(hotMiddleware(compiler, {
			log: logger.info
		}));
	}
}

module.exports = function(db) {
  // Create express app
  let app = express();
  initMiddleware(app);
  // Init view engine
  initViewEngine(app);
  // Init session handler
  initSession(app, db);
  // Init auth 
  let passport = initAuth(app);
  // Init webpack devserver & hot reload module
	initWebpack(app);
  // Load services
//   let services = require("./services");
//   services.loadServices(app, db);

  server = http.createServer(app);
  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening );
  require("../routes")(app, db , passport);
  return server;
};


function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
    return false;
  }
  
  function onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
  }
  