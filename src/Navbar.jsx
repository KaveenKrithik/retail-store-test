import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaTags, FaStar } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title-container">
                <img
                    src="/images/LOGO.png" 
                    alt="Logo"
                    className="navbar-logo"
                />
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="#finder" className="navbar-link">
                        <FaSignInAlt className="navbar-icon" />
                        <span>Login</span>
                    </a>
                </li>
                <li>
                    <a href="#deals" className="navbar-link">
                        <FaTags className="navbar-icon" />
                        <span>Best Deals</span>
                    </a>
                </li>
                <li>
                    <a href="#top-buys" className="navbar-link">
                        <FaStar className="navbar-icon" />
                        <span>Top Buys</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;




