const Package = require('../models/Package');

// Add New Package (Admin)
exports.addPackage = async (req, res) => {
    try {
        const { name, priceRange, features } = req.body;

        const newPackage = new Package({
            name,
            priceRange,
            features,
        });

        await newPackage.save();

        res.status(201).json({ message: 'Package Added Successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get All Packages
exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
