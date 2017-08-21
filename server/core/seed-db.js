"use strict";
var User = require("../models/user");
module.exports = function() {
  // Create admin
  User.findOne(
    {
      username: "utaisupply"
    },
    function(err, obj) {
      if (obj === null) {
        var adminUser = new User({
          username: "utaisupply",
          password: "@Utaisupply2017!"
        });
        adminUser.save(function(err) {
          if (err) throw err;
        });
      }
    }
  );
};
