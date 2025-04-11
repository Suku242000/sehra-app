const Vendor = require('../models/Vendor');

// Add New Vendor (Admin)
exports.addVendor = async (req, res) => {
  const { name, category, location, contact, description } = req.body;

  try {
    const vendor = await Vendor.create({
      name,
      category,
      location,
      contact,
      description,
    });

    res.status(201).json({ message: "Vendor Added Successfully", vendor });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get All Vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
