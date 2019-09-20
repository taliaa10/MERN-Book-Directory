import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

export class Footer extends Component {
  render() {
    return <div className="footer">This is the mf footer</div>;
  }
}

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        {/* <App /> */}
        <div className="main">
          {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h6>REACT BOOKS</h6>
          </header>
        </div> */}
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
