const express = require("express");
const router = express.Router();
const AdminRegisterController = require("../controllers/AdminRegisterController");
const AdminLoginController = require("../controllers/Admin.Login.Controller");
const AdminDetailscontrollers = require("../controllers/AdminDetails.controllers");
const authAdminToken = require("../middlewares/authAdminToken");
const AdminLogoutController = require("../controllers/AdminLogoutController");


router.post("/register" , AdminRegisterController);
router.post("/login" , AdminLoginController);
router.get("/profile" , authAdminToken , AdminDetailscontrollers);
router.get("/logout" , AdminLogoutController);

module.exports = router;