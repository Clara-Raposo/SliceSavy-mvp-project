import "../Styles/Footer.css";
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <div className="footer">
        <div className="footer__brand-name"><h2>SliceSavy</h2></div>
        <div className="footer__description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
        <div className="footer__social">
            <h2>Social Media</h2>
        </div>
         <div className="footer__social-logos">
        <a href="/" onClick={handleClick}><BsInstagram /></a>
        <a href="/" onClick={handleClick}><BsFacebook /></a>
        <a href="/" onClick={handleClick}><BsTwitter /></a>
        <a href="/" onClick={handleClick}><BsPinterest /></a>
        </div>
        <div className="footer__contact">
        <h2>Contact</h2>
        </div>
        <div className="footer__contact-item">
        <p>Pg. de Gràcia, 19B, 08007 Barcelona</p>
        <p>661 16 16 16</p>
        </div>
        </div>
    )
}

export default Footer;