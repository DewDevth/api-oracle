const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/users-all", userControllers.getAllUsers);

module.exports = router;
