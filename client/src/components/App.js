import React, { Component } from "react";
import "../App.css";
import Book from "./Books";
import AddBookForm from "./AddBook";
import axios from "axios";
import { showAlert } from "../utils/alerts";
import sampleBooks from "../utils/sample-books";

class App extends Component {
  state = {
    books: {},
    order: {}
  };

  componentDidMount() {
    this.getBooks();
  }

  loadSampleBooks = async () => {
    await this.setState({
      books: sampleBooks
    });
    Object.values(this.state.books).forEach(book => this.addBook(book));
  };

  deleteAllBooks = async () => {
    const books = { ...this.state.books };
    try {
      Object.values(books).forEach(book => this.deleteBook(book._id));
    } catch (error) {
      console.log(error);
    }
  };

  getBooks = async () => {
    const res = await axios("http://localhost:8000/books");
    const books = res.data.data.books;
    this.setState({ books });
  };

  addBook = async book => {
    const books = { ...this.state.books };
    await this.setState({
      books
    });

    const res = await axios.post("http://localhost:8000/books", book);
    if (res.data.status === "success") {
      showAlert("success", "New book(s) successfully added!");
    }

    this.getBooks();
  };

  deleteBook = async id => {
    const books = { ...this.state.books };
    try {
      const res = await axios.delete(`http://localhost:8000/books/${id}`);
      if (res.status === 204) {
        showAlert("success", "Book(s) successfully deleted!");
      }
      this.setState({ books });
      this.getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  addToOrder = id => {
    const order = { ...this.state.order };
    order[id] = order[id] + 1 || 1;
    this.setState({ order });
    console.log(id);
  };

  render() {
    return (
      <div className="App">
        {/* Eventually make a MyBooks component */}
        <div className="myBooksPage">
          <section className="book__section">
            <span>You have {this.state.books.length} books</span>
            <div className="books__container">
              {Object.keys(this.state.books).map(key => (
                <Book
                  key={key}
                  index={key}
                  details={this.state.books[key]}
                  addToOrder={this.addToOrder}
                  getBooks={this.getBooks}
                  deleteBook={this.deleteBook}
                />
              ))}
            </div>
            {this.state.books.length > 0 ? (
              <button
                className="deleteAllBooks__btn btn"
                onClick={this.deleteAllBooks}
              >
                Delete All Books
              </button>
            ) : null}
          </section>
          <AddBookForm
            getBooks={this.getBooks}
            addBook={this.addBook}
            loadSampleBooks={this.loadSampleBooks}
          />
        </div>
        {/* The MyBooks component will end here */}
      </div>
    );
  }
}

export default App;
