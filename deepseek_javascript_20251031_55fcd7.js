const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/campus_nav', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api/buildings', require('./routes/buildings'));
app.use('/api/routes', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});