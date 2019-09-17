const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/authRoutes");
const authController = require("./controllers/authController");

app.use(cors());
app.use(express.json());

app.use("/books", authController.authenticate, bookRouter);
app.use("/login", authRouter);

module.exports = app;
