const Dashboard = require('../models/Dashboard');

// Get Dashboard Details
exports.getDashboard = async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne();

    if (!dashboard) {
      return res.status(404).json({ message: "Dashboard Not Found" });
    }

    res.status(200).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update Dashboard (Admin)
exports.updateDashboard = async (req, res) => {
  const { description, stats, images } = req.body;

  try {
    let dashboard = await Dashboard.findOne();

    if (dashboard) {
      // Update existing dashboard
      dashboard.title = "Sehra";  // Hardcoded
      dashboard.description = description || dashboard.description;
      dashboard.stats = stats || dashboard.stats;
      dashboard.images = images || dashboard.images;
      await dashboard.save();
    } else {
      // Create new dashboard
      dashboard = await Dashboard.create({
        title: "Sehra", // Hardcoded
        description,
        stats,
        images,
      });
    }

    res.status(200).json({ message: "Dashboard Updated Successfully", dashboard });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
const Dashboard = require('../models/Dashboard');
const User = require('../models/User');

// Fetch Dashboard Data Based on User's Selected Package
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const dashboardData = await Dashboard.findOne(); // Static content for now (can customize later)

    res.status(200).json({
      package: user.selectedPackage,
      user: { name: user.name, role: user.role },
      dashboard: dashboardData
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

