import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Menu(props) {
  const handleSignout = () => {
    localStorage.removeItem("jsonwebtoken");
    props.onSignout();
  };

  return (
    <nav className="nav__navContainer">
      <div className="nav__navContent">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/discover">Discover Books</NavLink>
          </li>
          {props.authenticated ? (
            <li>
              <NavLink to="/mybooks">My Library</NavLink>
            </li>
          ) : null}
        </ul>
        <input placeholder="Search books"></input>
        <ul className="authLinks">
          {props.authenticated ? (
            <li>
              <NavLink onClick={handleSignout} to="/">
                Sign Out
              </NavLink>
            </li>
          ) : (
            <React.Fragment>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    authenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignout: () => dispatch({ type: "SIGN_OUT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
