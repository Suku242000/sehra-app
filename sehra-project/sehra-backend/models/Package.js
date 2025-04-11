
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: true
    },
    features: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
