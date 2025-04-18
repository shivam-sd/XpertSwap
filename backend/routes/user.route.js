const express = require("express");
const router = express.Router();
const UserRegisterController = require("../controllers/UserRegister.controller");
const UserLoginController = require("../controllers/UserLogin.controller");
const userDetailsController = require("../controllers/userDetails.controller");
const authTokenMiddleware = require("../middlewares/authtoken");
const logoutController = require("../controllers/UserLogout.Controller");
const UserProfileUpdate = require("../controllers/ProfileUpdate.controller");


router.post("/register", UserRegisterController);
router.post("/login" , UserLoginController);
router.get("/profile" , authTokenMiddleware , userDetailsController);
router.get("/logout" , logoutController);
router.put("/profile/update/:id" , UserProfileUpdate);


module.exports = router;