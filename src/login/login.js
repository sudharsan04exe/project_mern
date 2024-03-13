import React from "react";
import './login.css';


export default function Login() {
  return (
    <div className="login-main">
        <div className="heading"><p><center>Sign in</center></p></div>
    <div className="container">
      <p>Sign in and start listening</p>
      <form>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <span></span>
        </div>
        <div className="form-group">
          <div className="password-input-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <span className="password-toggle">
              &#128065;
            </span>
          </div>
        </div>

        <button className="button1" type="submit">
          Login
        </button>
      </form>
      <div className="register-link">
        <span>
          Don't have an account? </span> <a href="register.html">Register</a>
       
      </div>
    </div>
    </div>
  );
}
