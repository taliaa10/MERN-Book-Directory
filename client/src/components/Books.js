import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Book extends Component {
  render() {
    const {
      _id,
      title,
      author,
      genre,
      publisher,
      year,
      imageURL,
      imageLink
    } = this.props.details;
    // let bookItems = this.state.books.map(book => {
    // console.log(book);
    return (
      <div className="book" id={_id}>
        <a target="_blank" rel="noopener noreferrer" href={author}>
          {imageURL ? (
            <img alt="{name}" src={imageURL} />
          ) : (
            <img alt="{name}" src="placeholder.jpg" />
          )}
        </a>
        <h5 className="book__title">{title}</h5>
        <div className="quickBookOptions">
          <button onClick={() => this.props.addToOrder(_id)}>+</button>
          <button onClick={() => this.props.deleteBook(_id)}>&times;</button>
        </div>
      </div>
    );
    // });
    // return <div className="books__container">{bookItems}</div>;
  }

  // render() {
  //   const {
  //     title,
  //     author,
  //     genre,
  //     publisher,
  //     year,
  //     imageURL
  //   } = this.props.details;
  //   return <div className="book">{title}</div>;
  // }
}

export default Book;
