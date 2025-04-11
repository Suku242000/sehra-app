const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON body

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch((err) => console.log('MongoDB Connection Error:', err));

// Sample Route
app.get('/', (req, res) => {
    res.send('Welcome to Sehra App Backend!');
});

// Start Server

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// MongoDB Connection
require('./config/db')();

// Routes
app.use('/api/packages', require('./routes/packageRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
