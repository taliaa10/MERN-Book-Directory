import React, { useState } from "react";
import axios from "axios";
import setAuthenticationHeader from "../utils/authenticate";
import { showAlert } from "../utils/alerts";
import { connect } from "react-redux";

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/login", {
        username: user.username,
        password: user.password
      });
      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully!");
        const token = res.data.token;
        localStorage.setItem("jsonwebtoken", token);
        setAuthenticationHeader(token);
        props.onAuthenticated(token);
        window.setTimeout(() => {
          props.history.push("/mybooks");
        }, 1200);
      }
    } catch (error) {
      // alert("Login failed");
      console.log(error);
    }
  };

  const handleTextBoxChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="auth-form">
      <div className="books__add-book-container">
        <h2>Login to your account</h2>
        <form onSubmit={e => handleLogin(e)} className="form__book-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="true"
            onChange={handleTextBoxChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="true"
            onChange={handleTextBoxChange}
          />
          <button type="submit">Login</button>
          <span className="fine-print">Forgot Password?</span>
          <span className="fine-print">
            Don't have an account? Signup <a href="/signup">here</a>
          </span>
        </form>
      </div>
    </section>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthenticated: token => dispatch({ type: "ON_AUTHENTICATED", token })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
