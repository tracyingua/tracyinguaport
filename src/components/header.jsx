import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import logoleft from "../assets/images/logo_left.png";
import logoright from "../assets/images/logo_right.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <div className="logo-container">
            <img src={logoleft} alt="Tracy Logo" className="left-half" />
            <img src={logoright} alt="Tracy Logo" className="right-half" />
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleNavClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleNavClick}>
            About
          </Link>
          <Link to="/works" onClick={handleNavClick}>
            Works
          </Link>
          <Link to="/blog" onClick={handleNavClick}>
            Blog
          </Link>
          <Link to="/contact" onClick={handleNavClick}>
            Contact
          </Link>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="hamburger"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
