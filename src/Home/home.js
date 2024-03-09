import React from "react";
import Images from './music.jpg'
import './home.css';
export default function Home(){
    return(
        <div className="home-main">
               <div className="home-para"><p>Get 6 months of Sarath Music free with your new iPhone or eligible audio devices</p></div>
              <div className="home-main-img"><img src={Images} alt></img>
                    <p>Sarath Music</p>

              </div>
              <div className="home-center-content"><h2>Explore Our Music</h2></div>
        </div>
        

    );
}