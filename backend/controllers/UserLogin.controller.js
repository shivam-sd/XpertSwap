const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user using email
    const user = await UserModel.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(401).json({ errors: "Please register first." });
    }

    // Compare passwords
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(401).json({ errors: "Invalid credentials." });
    }

    // Check if SECRET_KEY is set
    if (!process.env.SECRET_KEY) {
      throw new Error("Missing SECRET_KEY in environment variables");
    }

    // Generate JWT token with expiry time
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "24h" } // Token expires in 8 hour
    );

    // Set secure cookie with the token
    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side access
      secure: process.env.NODE_ENV === "production", // Use secure flag in production
      sameSite: "Strict", // Prevents CSRF attacks
      maxAge: 86400000, // 24 hour
    }); 

    // Return success response
    res.status(200).json({
      message: "User successfully logged in.",
      user,
      token,
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ errors: "Error in user login.", details: err.message });
  }
};

module.exports = UserLoginController;