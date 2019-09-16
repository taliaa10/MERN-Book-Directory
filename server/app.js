const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("middleware");
  next();
});

app.use("/books", bookRouter);
app.use("/login", authRouter);

module.exports = app;
