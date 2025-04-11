
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routers/authRoutes'));
app.use('/api/packages', require('./routers/packageRoutes'));

// Test Route
app.get('/', (req, res) => {
  res.send('Sehra Wedding App Backend Running');
});

// Connect to Database
connectDB();

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
