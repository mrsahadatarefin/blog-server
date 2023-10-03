const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
} = require("../controllers/blog.controller");
const checkLogin = require("../middleware/chackLogin");
const router = express.Router();

//create Blog
router.post("/", checkLogin, createBlog);
//get All blog
router.get("/all", getAllBlogs);
router.get("/:id", getSingleBlog);

module.exports = router;
