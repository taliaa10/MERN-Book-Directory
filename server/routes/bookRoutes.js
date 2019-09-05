const express = require("express");

const router = express.Router();

const bookController = require("../controllers/bookController");

router.route("/").get(bookController.getAllBooks);

module.exports = router;
