const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminModel = require("../model/admin.model");

const AdminLoginController = async (req,res) => {
    try{
        const { email, password , port} = req.body;

        // Find user using email
        const Admin = await AdminModel.findOne({ email });
    
        // If user not found
        if (!Admin) {
          return res.status(401).json({ errors: "Please register first." });
        }
    
        // Compare passwords
        const isCorrectPassword = await bcrypt.compare(password, Admin.password);
        if (!isCorrectPassword) {
          return res.status(401).json({ errors: "Invalid credentials." });
        }
    
        // Check if SECRET_KEY is set
        if (!process.env.SECRET_KEY) {
          throw new Error("Missing SECRET_KEY in environment variables");
        }
    
        // Generate JWT token with expiry time
        const AdminToken = jwt.sign(
          { id: Admin._id, email: Admin.email },
          process.env.SECRET_KEY,
          { expiresIn: "24h" } // Token expires in 8 hour
        );
    
        // Set secure cookie with the token
        res.cookie("AdminToken", AdminToken, {
          httpOnly: true, // Prevents client-side access
          secure: process.env.NODE_ENV === "production", // Use secure flag in production
          sameSite: "Strict", // Prevents CSRF attacks
          maxAge: 86400000, // 24 hour
        }); 
    
        // Return success response
        res.status(200).json({
          message: "Admin successfully logged in.",
          Admin,
          AdminToken,
        });
    }catch(err){
        console.log("Errro In AdminLogin" , err);
        res.status(500).json({errors:"Error in Admin Login"});
    }
}


module.exports = AdminLoginController;