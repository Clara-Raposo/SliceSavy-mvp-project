import { useState } from "react";
import "../Styles/Navbar.css";
import { HiSearch, HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleNavLinkClick = (event) => {
    event.preventDefault(); // Prevent the default navigation behavior
    toggleNav(); // Close the navigation menu
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
            <a href="/home" onClick={handleNavLinkClick}>Home</a>
          </li>
          <li>
            <a href="/about" onClick={handleNavLinkClick}>About</a>
          </li>
          <li>
            <a href="/contact" onClick={handleNavLinkClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}