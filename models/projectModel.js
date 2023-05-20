const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  links: {
    image: String,
    live: String,
    details: {
      titleSmall: String,
      titleBig: String,
      desc: String,
      client: String,
      server: String,
    },
  },
  category: [String],
  date: Date,
  priority: Number,
  slide: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
  },
  technology: [String],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
