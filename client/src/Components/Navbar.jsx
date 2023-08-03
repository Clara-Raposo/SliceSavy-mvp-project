import React, { useState } from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        SliceSavy
      </a>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
        Search
        {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
        </button>

      </div>
      <button className="hamburger" onClick={toggleNav}>
        {/* icon from heroicons.com */}
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6"
        >
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
        />
        </svg>
      </button>
      <div className={`navigation-menu ${isNavExpanded ? "expanded" : ""}`}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}