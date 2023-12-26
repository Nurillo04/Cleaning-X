import React from "react";
import { logo } from "../../assets";

import "./Header.scss";

const Header = () => {
  return (
    <>
      {
        <div className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <img className="header__logoImg" src={logo} alt="logo " />
                <nav>
                  <ul className="header__list">
                    <li className="header__item">Home</li>
                    <li className="header__item">About</li>
                    <li className="header__item">Services</li>
                    <li className="header__item">Articles</li>
                    <li className="header__item">Contact</li>
                  </ul>
                </nav>
              </div>
              <div className="header__right">
                <p className="header__cart">Cart (0)</p>
                <button className="header__btn">Get a free quote</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Header;


