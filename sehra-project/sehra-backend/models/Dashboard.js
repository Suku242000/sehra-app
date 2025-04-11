const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  title: String,
  description: String,
  stats: {
    usersCount: Number,
    vendorsCount: Number,
    weddingsManaged: Number,
  },
  images: [String],
});

module.exports = mongoose.model('Dashboard', dashboardSchema);
