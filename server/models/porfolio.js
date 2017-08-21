let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let portfolioSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  images: {
    type: String
  }
});
