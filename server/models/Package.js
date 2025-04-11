const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Silver', 'Gold', 'Platinum'],
  },
  priceRange: {
    type: String,
    required: true,
  },
  features: [String], // Example: ['Venue Selection', 'Decoration', 'Photography']
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
