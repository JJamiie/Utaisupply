let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let categorySchema = new Schema({
  translations: [{ language: String, name: String }],
  type: Number
});

var Category = mongoose.model("Category", categorySchema);
module.exports = Category;
