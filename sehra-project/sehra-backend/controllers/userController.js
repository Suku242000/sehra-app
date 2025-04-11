const User = require('../models/User');

// Get User Profile Data
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Update Selected Package
exports.updateSelectedPackage = async (req, res) => {
  const { selectedPackage } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.selectedPackage = selectedPackage;
    await user.save();

    res.status(200).json({ message: 'Package Updated Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
