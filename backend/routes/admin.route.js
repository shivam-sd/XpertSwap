const express = require("express");
const router = express.Router();
const AdminRegisterController = require("../controllers/AdminRegisterController");
const AdminLoginController = require("../controllers/Admin.Login.Controller");


router.post("/register" , AdminRegisterController);
router.post("/login" , AdminLoginController);

module.exports = router;