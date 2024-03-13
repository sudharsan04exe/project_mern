import React, { useEffect, useState } from "react";
import Images from './music.jpg'
import './home.css';
import Phone from './phonecopy.png'

export default function Home(){
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true); // Set loaded to true after component is mounted
    }, []);

    return(
        <div className={`home-main ${loaded ? "initial-load" : ""}`}>
            <div className="home-para">
                <p>Get 6 months of Sarath Music free with your eligible audio devices</p>
            </div>
            <div className="home-main-img">
                <img src={Images} alt="Sarath Music" />
                <p>Sarath Music</p>
            </div>
            <div className="home-center-content">
                <h2>Explore Our Music</h2>
            </div>
            <div className="btn">
                <button>Try 1 month free*</button>
            </div>
            <div className="home-below">
                <div className="img1"><img src={Phone} alt="Phone" /></div>
                <div className="img2"><img src={Phone} alt="Phone" /></div>
                <div className="img1"><img src={Phone} alt="Phone" /></div>
                <div className="img2"><img src={Phone} alt="Phone" /></div>
            </div>
            <div className="home-below-phone-image">
                <div className="img1"><img src="https://www.apple.com/in/apple-music/images/overview/hero_screen_radio__ctc93fzi4sgi_large.jpg" alt="Radio" /></div>
                <div className="img2"><img src="https://www.apple.com/in/apple-music/images/overview/hero_screen_search__enln0l89zrki_large.jpg" alt="Search" /></div>
                <div className="img3"><img src="https://www.apple.com/in/apple-music/images/overview/hero_screen_lyrics__ganwsph31wq6_large.jpg" alt="Lyrics" /></div>
                <div className="img4"><img src="https://www.apple.com/in/apple-music/images/overview/hero_screen_listen_now__efapctigl9qq_large.jpg" alt="Listen Now" /></div>
            
            </div>
            
            {/* <div className="hello"> <img src={Phone}></img></div> */}
            <div className="bottom"><h1>Over <span>100 million songs </span>and <br/>30,000 playlists, always ad‑free.</h1>
<h1>Experience <span>Spatial Audio </span>for<br/> sound that surrounds you.</h1>
<h1><span>Sing along </span>to real-time lyrics<br/> with Apple Music Sing.</h1>
<h1>Listen across all your devices, <br/><span>online or off.</span></h1>
<h1>Explore the world’s largest<br/> <span>classical music</span> catalogue.</h1>

</div>
        </div>
    );
}
