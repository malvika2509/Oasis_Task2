import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="main-nav">
      <nav>
        <div className="logo">
          <h1>ALEC BENJAMIN</h1>
        </div>
        <div className="social">
          <ul type="none" className="social-buttons">
            <li>
              <a href="https://www.facebook.com/AlecBenjaminMusic" target="_">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/alecbenjamin" target="_">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alecbenjamin/" target="_">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/5IH6FPUwQTxPSXurCrcIov?si=l3f64QpfRoqEVeKmsqxeRw&nd=1"
                target="_"
              >
                <FaSpotify />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
