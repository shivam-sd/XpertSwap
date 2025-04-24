const AdminModel = require("../model/admin.model");

const AdminDetailscontrollers = async (req, res) => {
  try {
    const AdminId = req.AdminId;

    // Check if userId is available (should be set by auth middleware)
    if (!AdminId) {
      return res.status(401).json({ error: "Unauthorized: Admin ID missing from token" });
    }

    // Fetch user without password field
    const Admin = await AdminModel.findById(AdminId);

    if (!Admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    return res.status(200).json({
      message: "Admin details retrieved successfully",
      Admin,
    });

  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

module.exports = AdminDetailscontrollers;
