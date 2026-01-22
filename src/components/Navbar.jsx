import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);


  return (
    <>
      <nav className="main-navbar">
        <div className="nav-container">
          <Link to='/' className="logo">Newsly</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/entertainment">Entertainment</Link></li>
            <li><Link to="/category/sports">Sports</Link></li>
            <li><Link to="/category/business">Business</Link></li>
            <li className="dropdown">
              <span>More ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/category/health">Health</Link></li>
                <li><Link to="/category/science">Science</Link></li>
                <li><Link to="/category/technology">Technology</Link></li>
                <li><Link to="/category/general">General</Link></li>
              </ul> </li>
          </ul>
          <div className="menu-icon" onClick={toggleSidebar}>
            ☰
          </div>
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen? "open":""}`}>
         
          <button className="close-btn" onClick={closeSidebar}>×</button>
        <ul >
            <li><Link onClick={closeSidebar} to="/">Home</Link></li>
            <li><Link onClick={closeSidebar} to="/category/entertainment">Entertainment</Link></li>
            <li><Link onClick={closeSidebar} to="/category/sports">Sports</Link></li>
            <li><Link onClick={closeSidebar} to="/category/business">Business</Link></li>
            <li><Link onClick={closeSidebar} to="/category/health">Health</Link></li>
            <li><Link onClick={closeSidebar} to="/category/science">Science</Link></li>
            <li><Link onClick={closeSidebar} to="/category/technology">Technology</Link></li>
            <li><Link onClick={closeSidebar} to="/category/general">General</Link></li>
        </ul>
      </div>
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div> }
    </>
  );
}

export default Navbar;
