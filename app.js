const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/userRoutes');
const { submitMessage } = require('./mail/contactController');

const app = express();

// Enable CORS
app.use(cors());

// Extend URL functionality
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());





// Connect to MongoDB using Mongoose
async function connectToDB() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/portfolio-data', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to DataBase!');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
    }
  }
  
  connectToDB();

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
