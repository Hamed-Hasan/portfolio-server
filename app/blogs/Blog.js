// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  badges: [String],
  image: String,
  title: String,
  desc: String,
  author: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);
