const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserRegisterController = async (req, res) => {
  const { name, email, password, phone, address, skillyouoffre, skillyouwant } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await UserModel.create({
      name,
      email,
      phone,
      address,
      skillyouoffre,
      skillyouwant,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "28d" }
    );

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict", // Change to "None" if using cross-site cookies
      maxAge: 28 * 24 * 60 * 60 * 1000, // 28 days
    });

    // Send success response (avoid sending password)
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address,
        skillyouoffre: newUser.skillyouoffre,
        skillyouwant: newUser.skillyouwant,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Server error while registering" });
  }
};

module.exports = UserRegisterController;
