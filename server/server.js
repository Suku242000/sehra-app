
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routers/authroutes');
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Sehra Wedding App Backend Running');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');
  // Start Server after DB connection
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.log('MongoDB Connection Error:', err);
});
