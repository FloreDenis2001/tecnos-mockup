import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header__mobile">
      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        <div className="menu">
          <div className="header__mobile__logoBox">
            <img
              src="https://www.tecnos.ro/wp-content/uploads/2018/05/logo-tecnos.png"
              alt="Romstal"
              className="header__logo"
            />
          </div>

          <div className="header__mobile__searchBox">
            <input type="text" placeholder="Search" />
            <FontAwesomeIcon icon={faSearch} />
          </div>

          <ul>
            <li>Acasa</li>
            <li>Produse</li>
            <li className="dropdown">
              Aplicatii si tehnologie
              <ul className="dropdown-menu">
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            </li>
            <li>Industrii</li>
            <li>Partenerii</li>
          </ul>
        </div>
      </div>

      <div className="header__mobile__logoBox">
        <img
          src="https://www.tecnos.ro/wp-content/uploads/2018/05/logo-tecnos.png"
          alt="Romstal"
          className="header__logo"
        />
      </div>

      <div className="header__mobile__menu">
        <div className="item">
          <button
            className={`menu-trigger ${menuOpen ? "active" : ""}`}
            id="menu07"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
