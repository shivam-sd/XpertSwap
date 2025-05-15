const UserModel = require("../model/user.model");
const cloudinary = require("cloudinary").v2;

const UserProfileUpdate = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    // Check if a file was uploaded
    const file = req.files?.profileImage;
    if (!file || Object.keys(file).length === 0) {
      return res.status(400).json({ error: "No file uploaded" });
    }
  //  const allowedFormats = ["file/jpeg", "file/png"];
  //   if (!allowedFormats.includes(file.mimetype)) {
  //     return res.status(400).json({ errors: "Invalid file format. Only PNG or JPG are allowed" });
  //   }
    const uploadResponse = await cloudinary.uploader.upload(file.tempFilePath);
    const imageUrl = uploadResponse.url;
    updatedData.profilePic = imageUrl;

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    res.status(200).json({ message: "Profile Updated", updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = UserProfileUpdate;
