import React from "react";

function Signup() {
  const handleTextBoxChange = e => {
    console.log(e);
  };

  return (
    <section className="auth-form">
      <div className="books__add-book-container">
        <h2>Signup for an account</h2>
        <form
          // onSubmit={e => this.handleSave(e)}
          className="form__book-form"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleTextBoxChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleTextBoxChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleTextBoxChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleTextBoxChange}
          />
          <button type="submit">Signup</button>
          <span>
            Already have an account? Login <a href="/login">here</a>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Signup;
