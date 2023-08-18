import { useState } from "react";
import "../Styles/Navbar.css";
import { HiMenu } from "react-icons/hi";

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
      <a href="/" className="navigation__brand-name">
        SliceSavy
      </a>
      <button className="navigation__hamburger" onClick={toggleNav}>
        <HiMenu className="navigation__hamburger-icon" /> 
      </button>
      <div className={`navigation__menu ${isNavExpanded ? "navigation__menu--expanded" : ""}`}>
        <ul className="navigation__menu-list">
          <li className="navigation__menu-item">
            <a href="/home" className="navigation__menu-link" onClick={handleNavLinkClick}>Home</a>
          </li>
          <li className="navigation__menu-item">
            <a href="/about" className="navigation__menu-link" onClick={handleNavLinkClick}>About</a>
          </li>
          <li className="navigation__menu-item">
            <a href="/contact" className="navigation__menu-link" onClick={handleNavLinkClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}