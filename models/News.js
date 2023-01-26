//const { triggerAsyncId } = require("async_hooks");
//const { createDecipheriv } = require("crypto");
const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: String,
  /*date: Date,
  created: Date,
  creator: String,
  text: String,
  tags: [String],
  accepted: Boolean,*/
});
module.exports = mongoose.model("News", NewsSchema);
