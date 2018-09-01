var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recordSchema = new Schema({
  recordName: String,
  artist: String,
  format: String,
  purchased: String,
  year: Number,
  label: String,
  category: String,
  country: String,
  description: String
});

module.exports = mongoose.model("record", recordSchema);
