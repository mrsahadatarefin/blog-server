const Blog = require("../models/Blog");
const User = require("../models/User");

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await new Blog({
      ...req.body,
      user: req.userId,
    });
    console.log(newBlog);

    const blog = await newBlog.save();
    await User.updateOne(
      {
        _id: req.userId,
      },
      {
        $push: {
          myBlogs: blog._id,
        },
      }
    );
    res.status(200).json({
      status: true,
      message: "successfully added blog",
    });
  } catch {
    res.status(500).json({
      error: "There is server site error",
    });
  }
};
exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({}).populate("user", "name");
    res.status(200).json({
      massage: "All Blogs hare",
      data: allBlogs,
    });
  } catch {
    res.status(500).json({
      error: "There is server site error",
    });
  }
};
