const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res, next) => {
  const books = await Book.find();

  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      books
    }
  });
};

exports.addBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      status: "success",
      data: book
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteBook = async (req, res, next) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) {
    console.log("none found");
  }

  res.status(204).json({
    status: "success",
    data: null
  });
};

exports.udpateBook = async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: "success",
    data: book
  });
};

exports.getOneBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: book
    });
  } catch (error) {
    console.log(error);
  }
};
