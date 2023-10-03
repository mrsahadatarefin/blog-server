const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const user = await new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    user.save();
    res.status(200).json({
      status: true,
      message: "signup was successful",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.loginUser = async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });

    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isValidPassword) {
        // generate token

        const token = jwt.sign(
          { username: user[0].username, userId: user[0]._id },

          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          access_token: token,
          massage: "login successful",
        });
      } else {
        res.status(401).json({
          error: "authentication failure",
        });
      }
    } else {
      res.status(401).json({
        error: "authentication failure",
      });
    }
  } catch {
    res.status(401).json({
      error: "authentication failure",
    });
  }
};
