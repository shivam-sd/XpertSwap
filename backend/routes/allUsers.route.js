const express = require("express");
const router = express.Router();
const AllUsersController = require("../controllers/AllUsers.Controllers");


router.get("/users" , AllUsersController);


module.exports = router;