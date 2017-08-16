"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
      script: './bin/www'
    })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 1000);
    });
});

gulp.task('styles', function() {
  return gulp.src('./public/stylesheets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/stylesheets/css/'));
});


gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init( {
    proxy: 'http://localhost:3000',
    port: 5000,
    browser: "google chrome"
  });
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('./public/stylesheets/scss/**/*.scss', ['styles']);
  gulp.watch("./public/stylesheets/scss/**/*.scss").on('change', browserSync.reload);
  gulp.watch("./public/stylesheets/javascripts/**/*.js").on('change', browserSync.reload);
  gulp.watch("./views/**/*.pug").on('change', browserSync.reload);
  gulp.watch("./routes/**/*.js").on('change', browserSync.reload);
  gulp.watch("./models/**/*.js").on('change', browserSync.reload);
});
