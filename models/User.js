const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name "],
      trim: true,
      minLength: [3, "name must be at least 3 characters"],
      maxLength: [100, "name is to large"],
    },
    username: {
      type: String,
      required: [true, "please provide a username "],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "please provide a email "],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide a password "],
      trim: true,
    },
    imageUrl: String,

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
