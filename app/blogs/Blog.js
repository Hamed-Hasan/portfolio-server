// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  badges: [String],
  image: String,
  title: String,
  desc: String,
  author: String,
  date: { type: Date, default: Date.now },
  liked: { type: Boolean, default: false },
  likeCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Blog', blogSchema);
