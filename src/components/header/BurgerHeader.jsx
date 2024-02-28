import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logo.jpeg";

function MobileContainer() {
  useEffect(() => {
    const fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    fontAwesomeLink.rel = "stylesheet";
    document.head.appendChild(fontAwesomeLink);

    // Clean up function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(fontAwesomeLink);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="mobile-container">
      <TopNav />
    </div>
  );
}

function TopNav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="topnav">
      <br />
      <br />
      <div id="myLinks" className={showMenu ? "show" : "hide"}>
        <Link to="/">
          <p>Головна</p>
        </Link>
        <Link to="/Друга">
          <p>Українці у Відні</p>
        </Link>
        <Link to="/Третя">
          <p>Українська малеча</p>
        </Link>
        <Link to="/ПроНас">
          <p>Про нас</p>
        </Link>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default MobileContainer;
