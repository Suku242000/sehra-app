const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUser, getAllVendors, deleteVendor } = require('../controllers/adminController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// User Management
router.get('/users', verifyToken, isAdmin, getAllUsers);
router.delete('/users/:id', verifyToken, isAdmin, deleteUser);

// Vendor Management
router.get('/vendors', verifyToken, isAdmin, getAllVendors);
router.delete('/vendors/:id', verifyToken, isAdmin, deleteVendor);

module.exports = router;
