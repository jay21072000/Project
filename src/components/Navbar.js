import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>B</span>lockchain
            <span></span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/about">Manufacture</NavLink>
            </li>
            <li>
              <NavLink to="/service">Supplier</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Transporter</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Wholesaler</NavLink>
            </li>
          
           
          </ul>
        </div>

       {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              
            </li>
            <li>
             
            </li>
            <li>
             
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
