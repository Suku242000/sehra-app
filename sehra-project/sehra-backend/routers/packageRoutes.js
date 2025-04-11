const express = require('express');
const router = express.Router();
const { addPackage, getAllPackages } = require('../controllers/packageController');

// Add Package (Admin)
router.post('/add', addPackage);

// Get All Packages
router.get('/', getAllPackages);

module.exports = router;