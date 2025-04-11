const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {  // Note: You are using 'category' instead of 'serviceType'
    type: String,
    required: true,
  },
  location: String,
  contact: String,
  description: String,
  images: [String], // Optional for future image uploads
});

module.exports = mongoose.model('Vendor', vendorSchema);
