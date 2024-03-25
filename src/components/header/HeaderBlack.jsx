import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logo.jpeg";

function Header() {
  return (
    <div className="header-block">
      <div className="header-block__inner-wrap">
        <div className="header-block__logo">
          <h2 className="header-block__titles">
            <i>Ich komme aus der Ukraine</i>
          </h2>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="header-block__list">
          <Link to="/" className="header-block__page">
            <p className="header-block__texts">Головна</p>
          </Link>
          <Link to="/УкраїнціУВідні" className="header-block__page">
            <p className="header-block__texts">Українці у Відні</p>
          </Link>
          <Link to="/УкраїнськаМалеча" className="header-block__page">
            <p className="header-block__texts">Українська малеча</p>
          </Link>
          <Link to="/НашіГерої" className="header-block__page">
            <p className="header-block__texts">Наші Герої</p>
          </Link>
          <Link to="/ПроНас" className="header-block__page">
            <p className="header-block__texts">Про нас</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
