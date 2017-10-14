"use strict";
var User = require("../../models/user");
let Category = require("../../models/category");
let listCategory = require("./seed-category.json");

module.exports = function() {
  createAdmin();
  createCategory();
};

function createAdmin() {
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
}

function createCategory() {
  Category.find({}, function(err, objs) {
    if (objs.length === 0) {
      console.log("-------- Add category to db --------");
      listCategory.forEach(function(item, index, array) {
        let category = new Category(item);
        category.save(function(err) {
          if (err) throw err;
        });
      });
    }
  });
}
