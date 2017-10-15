"use strict";

let logger = require("./logger");
let config = require("../config");
let redis = require("./redis");

let express = require("express");
let http = require("http");
let path = require("path");

let moment = require("moment");
let flash = require("express-flash");
let favicon = require("serve-favicon");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let validator = require("express-validator");
let csrf = require("csurf");
let netjet = require("netjet");

let session = require("express-session");
let compress = require("compression");
let methodOverride = require("method-override");
let helmet = require("helmet");
let crossdomain = require("helmet-crossdomain");
let mongoose = require("mongoose");
let MongoStore = require("connect-mongo")(session);

let serverFolder = path.normalize(path.join(config.rootPath, "server"));
let dataFolder = path.normalize(path.join(config.rootPath, "data"));

let fileUpload = require("express-fileupload");

function initMiddleware(app) {
  app.use(
    compress({
      filter: function(req, res) {
        return /json|text|javascript|css/.test(res.getHeader("Content-Type"));
      },
      level: 3,
      threshold: 512
    })
  );

  // Configure express app
  app.set("port", config.port);

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(validator());
  app.use(methodOverride());
  app.use(fileUpload());

  if (config.isProductionMode()) {
    // HTTP/2 Server Push support
    app.use(
      netjet({
        cache: {
          max: 100
        }
      })
    );
    // Setting up static folder
  }
  app.use(express["static"](path.join(serverFolder, "public")));
  app.use(express["static"](path.join(serverFolder, "public/images")));
  app.use(express["static"](path.join(dataFolder)));

  // Cookie parser should be above session
  app.use(cookieParser());

  app.set("etag", true); // other values 'weak', 'strong'

  app.use(flash());

  if (config.isDevMode()) {
    // Init morgan
    let stream = require("stream");
    let lmStream = new stream.Stream();

    lmStream.writable = true;
    lmStream.write = function(data) {
      return logger.debug(data);
    };

    app.use(
      morgan("dev", {
        stream: lmStream
      })
    );

    // app.use(require("express-status-monitor")());
  }
}

function initViewEngine(app) {
  app.set("views", path.join(serverFolder, "views"));
  app.set("view engine", "pug");
  // Environment dependent middleware
  if (config.isDevMode()) {
    app.set("showStackError", true);

    // Disable views cache
    app.set("view cache", false);
    app.use(helmet.noCache());

    // Jade options: Don't minify html, debug intrumentation
    app.locals.pretty = true;
    //app.locals.compileDebug = true;
  } else {
    app.locals.cache = "memory";
    app.set("view cache", true);
  }
}

function initSession(app, db) {
  app.use(
    session({
      saveUninitialized: true,
      resave: false,
      secret: config.sessionSecret,
      store: new MongoStore({
        mongooseConnection: db.connection,
        collection: config.sessions.collection,
        autoReconnect: true
      }),
      cookie: config.sessions.cookie,
      name: config.sessions.name
    })
  );
}

function initAuth(app) {
  let passport = require("passport");
  require("./auth/passport")(app, passport);
  return passport;
}

function initWebpack(app) {
  if (!config.isProductionMode()) {
    let webpack = require("webpack");
    let wpConfig = require("../../build/webpack.dev.config");

    let compiler = webpack(wpConfig);
    let devMiddleware = require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: wpConfig.output.publicPath,
      headers: { "Access-Control-Allow-Origin": "*" },
      //stats: 'errors-only'
      stats: { colors: true }
    });
    let hotMiddleware = require("webpack-hot-middleware")(compiler, {
      log: logger.info
    });
    app.use(devMiddleware);
    app.use(hotMiddleware);
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

  let server = http.createServer(app);
  server.on("error", onError);
  require("../routes")(app, db, passport);
  return server;
};

function normalizePort(val) {
  let port = parseInt(val, 10);
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
  let bind =
    typeof port === "string" ? "Pipe " + config.port : "Port " + config.port;
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
