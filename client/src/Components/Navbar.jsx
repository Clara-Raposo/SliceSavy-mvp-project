import { useState } from "react";
import "../Styles/Navbar.css";
import { HiSearch, HiMenu } from "react-icons/hi";

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
        <HiSearch />
        </button>

      </div>
      <button className="hamburger" onClick={toggleNav}>
        <HiMenu /> 
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