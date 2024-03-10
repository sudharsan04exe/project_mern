import React from "react";
import './signup.css';


export default function Login() {
  return (
    <div className="login-main">
        <div className="heading"><p><center>Are you a new user?</center></p></div>
    <div className="container">
      <p>signup</p>
      <form>
        <div className="form-group">
          <input type="text" id="username" name="username" placeholder="Email" required/>
          <span></span>
        </div>
        <div className="form-group">
          <input type="text" id="username" name="username" placeholder="Username" required/>
          <span></span>
        </div>
        <div className="form-group">
          <div className="password-input-container">
            <input type="password" id="password" name="password" placeholder="Password" required/>
            <span className="password-toggle">&#128065;</span>
          </div>
        </div>
        <div className="form-group">
          <div className="password-input-container">
            <input type="password" id="password" name="password" placeholder="Confirm Password" required/>
            <span className="password-toggle">&#128065;</span>
          </div>
        </div>

        <button className="button1" type="submit">
          Signup
        </button>
      </form>
      
    </div>
    </div>
  );
}
