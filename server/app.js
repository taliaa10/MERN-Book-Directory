const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const bookRouter = require("./routes/bookRoutes");

app.use(cors());
app.use(express.json());

// let books = [{ title: "book1" }, { title: "book2" }];
// let books = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/books.json`));
// let books = Book.find();
// console.log(books);

app.use("/books", bookRouter);

// app.get("/books", (req, res) => {
//   // res.json(books);
//   bookController.getAllBooks();
// });

app.post("/books", (req, res) => {
  let title = req.body.title;
  books.push({ title: title });

  res.json({ success: true });
});

module.exports = app;
