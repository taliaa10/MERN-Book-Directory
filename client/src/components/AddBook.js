import React, { Component } from "react";
import axios from "axios";
import { showAlert } from "../utils/alerts";

class AddBookForm extends Component {
  titleRef = React.createRef();
  authorRef = React.createRef();
  genreRef = React.createRef();
  publisherRef = React.createRef();
  yearRef = React.createRef();
  imageURLRef = React.createRef();

  createBook = e => {
    e.preventDefault();
    const book = {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      genre: this.genreRef.current.value,
      publisher: this.publisherRef.current.value,
      year: this.yearRef.current.value,
      imageURL: this.imageURLRef.current.value
    };
    this.props.addBook(book);
    e.target.reset();
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     title: "",
  //     author: "",
  //     genre: "",
  //     publisher: "",
  //     year: "",
  //     imageURL: ""
  //   };
  // }

  handleSave = async e => {
    try {
      e.preventDefault();
      console.log(e);
      const res = await axios.post("http://localhost:8000/books", {
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        publisher: this.state.publisher,
        year: this.state.year,
        imageURL: this.state.imageURL
      });
      if (res.data.status === "success") {
        showAlert("success", "New book successfully added!");
      }
      console.log(e);
    } catch (error) {
      console.log(error);
    }

    // window.location.assign("http://localhost:3000/books");
    // this.props.history.push("/books");
  };

  handleTextBoxChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <section className="books__add-book">
        <section className="books__add-book-container">
          <form onSubmit={e => this.createBook(e)} className="form__book-form">
            {/* <form onSubmit={e => this.handleSave(e)} className="form__book-form"> */}
            <h2>Add Book</h2>
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              ref={this.titleRef}
              onChange={this.handleTextBoxChange}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              ref={this.authorRef}
              onChange={this.handleTextBoxChange}
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              ref={this.genreRef}
              onChange={this.handleTextBoxChange}
            />
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              ref={this.publisherRef}
              onChange={this.handleTextBoxChange}
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              ref={this.yearRef}
              onChange={this.handleTextBoxChange}
            />
            <input
              type="text"
              name="imageURL"
              placeholder="Book Image"
              ref={this.imageURLRef}
              onChange={this.handleTextBoxChange}
            />
            <button type="submit">Add Book</button>
          </form>
          <button onClick={this.props.loadSampleBooks}>
            Load Sample Books
          </button>
        </section>
      </section>
    );
  }
}

export default AddBookForm;
