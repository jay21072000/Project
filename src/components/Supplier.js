import React, { useState } from "react";
import "./sidebar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
  {/* <nav className="main-nav"></nav> */}
      {/* 1st logo part  */}
      <div className="ab">
        <div className="main-container d-flex">
          <div className="sidebar" id="side_nav">
            <div className="header-box" px-2 pt-3 pb-4>
              <h1 className="fs-4"><span class="bg-white text-dark rounded shadow px-2 me-2">TCS</span><span className="text-white">Blockchain</span></h1>
              <button className="btn d-md-none d-block close-btn px-1 py-0 text-white"><i className="fal fa-stream"></i></button>
            </div>
            <ul classname="list-unstyled px-2">
              {/* <li classname=""><a href="/hello" classname="text-decoration-none"><i classname="fal fa-home"></i> Dashboard </a></li> */}
              <li>
              <NavLink to="/abhay">Add raw Material</NavLink>
            </li>
            <li>
              <NavLink to="/hello">View Raw Material</NavLink>
            </li>
              <li classname=""><a href="#" classname="text-decoration-none d-flex justify-content-between">
                <span><i classname="fal fa-comment"></i> User Profile</span>
                <span classname="bg-dark rounded-pill text-white py-0 px-2"></span>
              </a>
              </li>
              <li>
              <NavLink to="/hello">demo</NavLink>
            </li>
            <li>
              <NavLink to="/hello">demo</NavLink>
            </li>
            </ul>
            <hr classname="h-color mx-2"></hr>

            <ul classname="list-unstyled">
            <li>
              <NavLink to="/hello">demo</NavLink>
            </li>
                <li classname=""><a href="#" classname="text-decoration-none"><i classname="fal fa-bell"></i> demo </a></li>
              </ul>
          </div>
          <div className="content">
          </div>
        </div>
      </div>

    

      <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
    

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
    
  );
  
};

export default Sidebar;
