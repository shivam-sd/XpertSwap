const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const ConnectDataBase = require("./config/db.js");
const UserRouter = require("./routes/user.route.js");
const AllUsers = require("./routes/allUsers.route.js");
// const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;


ConnectDataBase();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:`${process.env.FRONTEND_BASE_URL}`,
    credentials:true
}));

app.use("/users" , UserRouter);
app.use("/all" , AllUsers);


// for cloudnary
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }))

// //cloudnary confugation code
// cloudinary.config({ 
//     cloud_name: process.env.cloud_name, 
//     api_key: process.env.api_key, 
//     api_secret: process.env.api_secret
// });

app.get("/" , (req,res) => {
    res.send("Hello XpertSwap - Skill Exchange Plateform");
});


app.listen(PORT , () => {
    console.log("Server Started On PORT No" , PORT);
})