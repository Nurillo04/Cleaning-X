import React from "react";

import { telephone } from "../../assets";
import { heroImg } from "../../assets";

import "./Hero.scss";

const hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__left">
              <h2 className="hero__title">Quality cleaning for your home</h2>
              <p className="hero__text">
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="hero__bottom">
                <button className="hero__btn">Get a free quote</button>
                <div className="hero__telephone">
                  <img
                    className="hero__telephoneImg"
                    src={telephone}
                    alt="rasm"
                  />
                  <div className="hero__number">
                    <p>Call us now</p>
                    <h6>(414) 567 - 2109</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero__right">
              <img className="hero__right__img" src={heroImg} alt="HeroImg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
