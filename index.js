const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// route require
const user = require("./routes/user.route");
const blog = require("./routes/blog.route");

// middleware
app.use(cors());
app.use(express.json());

// database connect

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("database connection is successful");
});

// routes
app.use("/api/v1/user", user);
app.use("/api/v1/blog", blog);

app.get("/", (req, res) => {
  res.send("mongoose  server  is running");
});

// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
