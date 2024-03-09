import React from "react";
import './nav.css';
import navIcon from './nav-icon.jpg';
import navSearch from './search_icon.jpg';
function Nav(){
    

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
          <button>Login</button>
          <button>Sign up</button>

        </div>
        </div>
        <div className="below-nav">
            <h4>Sarath Music's</h4>
            <button>Try 1 month free*</button>
        </div>
       </div>
  );

}
export default Nav;