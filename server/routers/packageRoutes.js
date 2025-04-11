const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

// Add Package (One Time by Admin)
router.post('/add', async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Packages
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require('express');
const { addPackage, getAllPackages } = require('../controllers/packageController');

// Add New Package (Admin)
router.post('/add', addPackage);

// Get All Packages
router.get('/', getAllPackages);

module.exports = router;
