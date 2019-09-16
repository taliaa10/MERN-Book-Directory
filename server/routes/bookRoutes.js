const express = require("express");

const router = express.Router();

const bookController = require("../controllers/bookController");

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.addBook);

router
  .route("/:id")
  .get(bookController.getOneBook)
  .patch(bookController.udpateBook)
  .delete(bookController.deleteBook);

module.exports = router;
