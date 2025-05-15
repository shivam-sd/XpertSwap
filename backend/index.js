const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const ConnectDataBase = require("./config/db.js");
const UserRouter = require("./routes/user.route.js");
const AllUsers = require("./routes/allUsers.route.js");
const AdminRoute = require("./routes/admin.route.js");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

ConnectDataBase();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: `${process.env.FRONTEND_BASE_URL}`,
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
     tempFileDir : '/tmp/'
  })
);

// console.log(process.env.FRONTEND_BASE_URL);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// console.log("Cloudinary Configured" , cloudinary.config());

app.use("/users", UserRouter);
app.use("/all", AllUsers);
app.use("/admin", AdminRoute);

app.get("/", (req, res) => {
  res.send("Hello XpertSwap - Skill Exchange Plateform");
});

app.listen(PORT, () => {
  console.log("Server Started On PORT No", PORT);
});
