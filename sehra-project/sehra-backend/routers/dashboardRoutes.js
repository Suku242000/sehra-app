const express = require('express');
const router = express.Router();
const { updateDashboard, getDashboardData } = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

// Update or Create Dashboard (Admin)
router.post('/update', updateDashboard);

// Protected Route → Dashboard
router.get('/', authMiddleware, getDashboardData);

module.exports = router;

