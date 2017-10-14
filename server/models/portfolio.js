let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let portfolioSchema = new Schema({
  translations: [
    {
      language: String,
      title: String,
      detail: String
    }
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
  hashtag: [String],
  image: [String]
});

var Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
