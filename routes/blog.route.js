const express = require("express");
const { createBlog, getAllBlogs } = require("../controllers/blog.controller");
const checkLogin = require("../middleware/chackLogin");
const router = express.Router();

//create Blog
router.post("/", checkLogin, createBlog);
//get All blog
router.get("/all", getAllBlogs);

module.exports = router;
