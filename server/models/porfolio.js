var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var portfolioSchema = new Schema({
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
