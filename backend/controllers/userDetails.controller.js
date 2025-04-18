const UserModel = require("../model/user.model");

const userDetailsController = async (req, res) => {
  try {
    const userId = req.userId;

    // Check if userId is available (should be set by auth middleware)
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: User ID missing from token" });
    }

    // Fetch user without password field
    const user = await UserModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      message: "User details retrieved successfully",
      user,
    });

  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

module.exports = userDetailsController;
