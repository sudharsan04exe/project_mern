import React from "react";
import './music.css'; // Import the styles

export default function Music() {
  return (
    <div className="music-container">
      <header className="header">
        <div className="logo">Spotify Playlists</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="user-actions">
          <button>Show all</button>
          <div className="dropdown">
            <button>Calming Acoustic</button>
            <ul>
              <li>Chillhop</li>
              <li>Jazz in the Background</li>
              {/* Add more calming acoustic options here */}
            </ul>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="your-library">
          <h2>Your Library</h2>
          <button>+</button>
          <p>Create your first playlist</p>
          <button>Create playlist</button>
        </section>
        <section className="curated-playlists">
          <h2>Curated Playlists</h2>
          <ul>
            <li>Today's Top Hits</li>
            <li>Chillhop</li>
            <li>Jazz in the Background</li>
            <li>Calming Acoustic</li>
            <li>BIGON</li>
            <li>INTERNET</li>
          </ul>
        </section>
        <section className="discover">
          <h2>Discover</h2>
          <p>Let's find some podcasts to follow. We'll keep you updated on new episodes!</p>
          <button>Sleep</button>
        </section>
      </main>
      <footer className="footer">
        <nav>
          <ul>
            <li>Legal</li>
            <li>Safety & Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
            <li>Accessibility</li>
          </ul>
        </nav>
        <div className="language">
          <p>English</p>
        </div>
      </footer>
    </div>
  );
}
