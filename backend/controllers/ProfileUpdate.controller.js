const UserModel = require("../model/user.model");

const UserProfileUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    res.status(200).json({
      message: "Profile Updated",
      updatedUser
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = UserProfileUpdate;
