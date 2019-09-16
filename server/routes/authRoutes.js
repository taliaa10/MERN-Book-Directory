const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController.js");

router.route("/").post(authController.login);

module.exports = router;
