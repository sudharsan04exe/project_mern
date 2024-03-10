import React from "react";
import './nav.css';
import navIcon from './nav-icon.jpg';
import navSearch from './search_icon.jpg';
import { Link } from "react-router-dom";
// import {Routes, Route,Link} from "react-router-dom";

function Nav(){
    function handleClick1(){
      window.location.href = "/login";
    }
    function handleClick2(){
      window.location.href = "/signup";
    }
    return(
       <div className="main-nav">
        <div className="menu">
        <div className="nav-icon"><img src={navIcon} alt></img></div>
        
        <div className="menuitem">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Store</a>
          <a href="#">Contact</a>
          <a href="#">Entertainment</a>
          <a href="#">Plans</a>
          <a href="#">TV & Home</a>
         
        </div>
        <div className="nav-search"><img src={navSearch}></img></div>
        <div className="login_signin">
        
        <button onClick={handleClick1}>Login</button>
      
          <button onClick={handleClick2}>Sign up</button>
         

        </div>
        </div>
        <div className="below-nav">
            <h4>Sarath Music's</h4>
            <button>Try 1 month free*</button>
        </div>
       
       {/* <Routes>
            <Route path="/login" element={<Login />} />
          </Routes> */}
      
       </div>
  );

}
export default Nav;