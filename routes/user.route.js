const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const chackLogin = require("../middleware/chackLogin");

const router = express.Router();

// signup
router.post("/signup", createUser);
// login
router.post("/login", loginUser);

module.exports = router;
