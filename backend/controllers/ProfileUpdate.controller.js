const UserModel = require("../model/user.model");
const cloudinary = require("cloudinary").v2;

const UserProfileUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    // Check if user exists
    const existingUser = await UserModel.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if a file was uploaded (optional)
    const file = req.files?.profileImage;
    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Only PNG or JPG are allowed.",
        });
      }

      // Upload to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "user_profiles",
        }
      );

      updatedData.profilePic = uploadResponse.secure_url;
    }

    // Update user data (with or without image)
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = UserProfileUpdate;
