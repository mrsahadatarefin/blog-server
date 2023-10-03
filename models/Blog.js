const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name "],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "please provide a  title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "please provide a description"],
      trim: true,
    },
    // categories: [
    //   {
    //     name: {
    //       type: String,
    //     },
    //     id: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "categories",
    //     },
    //   },
    // ],
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },

    imageUrl: {
      type: String,
      require: [true, "please provide a imageUrl"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
