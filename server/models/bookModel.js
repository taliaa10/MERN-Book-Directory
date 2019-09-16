const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A book must have a title"],
    trim: true
  },
  author: String,
  genre: String,
  publisher: String,
  year: String,
  imageURL: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// - title

// - genre (fiction, romance, technical, biography)

// - publisher

// - year

// - imageURL
