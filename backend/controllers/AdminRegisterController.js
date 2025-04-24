const AdminModel = require("../model/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const AdminRegisterController = async (req,res) => {
    const {email , password , port} = req.body;
    try{
        const IsAdmin = await AdminModel.findOne({email});
        if(IsAdmin) {
            res.status(500).json({message:"Admin Allready Exist"});
        }

          // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

        const admin = await AdminModel.create({
            email:email,
            password:hashedPassword,
            port:port
        });

         // Generate JWT token
            const AdminToken = jwt.sign(
              { id: admin._id, email: admin.email },
              process.env.SECRET_KEY);
        
            // Set token in HTTP-only cookie
            res.cookie("AdminToken", AdminToken, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "Strict", // Change to "None" if using cross-site cookies
            });

            res.status(200).json({message:"Admin Successfully register"});

    }catch(err){
        console.log("Error In Admin Registration" , err );
        res.status(500).json({errors:"Error In Admin"});
    }
}







module.exports = AdminRegisterController;