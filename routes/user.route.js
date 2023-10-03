const express = require("express");
const {
  createUser,
  loginUser,
  allUsers,
  singleUser,
} = require("../controllers/user.controller");
const chackLogin = require("../middleware/chackLogin");

const router = express.Router();

// signup
router.post("/signup", createUser);
// login
router.post("/login", loginUser);
router.get("/all", allUsers);
router.get("/:email", singleUser);

module.exports = router;
