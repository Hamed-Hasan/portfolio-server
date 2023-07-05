const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/routes');


const app = express();

// Enable CORS
app.use(cors());

// Extend URL functionality
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());





// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to DataBase!');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});


app.use(express.json());

// Routes
app.use('/', routes);


app.get('/', async (req, res) => {
  try {
    res.send('working portfolio server!');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = app;
