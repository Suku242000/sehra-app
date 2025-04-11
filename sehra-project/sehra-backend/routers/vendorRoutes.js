const express = require('express');
const router = express.Router();
const { addVendor, getAllVendors } = require('../controllers/vendorController');

// Add New Vendor (Admin)
router.post('/add', addVendor);

// Get All Vendors
router.get('/', getAllVendors);

module.exports = router;
