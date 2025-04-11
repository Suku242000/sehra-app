const express = require('express');
const router = express.Router();
const { getUserProfile, updateSelectedPackage } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// Get User Profile Data
router.get('/profile', protect, getUserProfile);

// Update Selected Package
router.put('/select-package', protect, updateSelectedPackage);

module.exports = router;
