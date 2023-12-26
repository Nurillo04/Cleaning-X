import React from "react";
import "./Covid.scss";
// import "../../scss/main.scss";

import { covidbg } from "../../assets";
import { telephone } from "../../assets";

const Covid = () => {
  return (
    <div className="covid">
      <div className="container">
        <div className="covid__wrapper">
          <div className="covid__left">
            <img className="covid__left__img" src={covidbg} alt="covidbg" />{" "}
          </div>
          <div className="covid__right">
            <h5 className="covid__title5">Covid-19 sanitization</h5>
            <h2 className="covid__title">
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p className="covid__text">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className="covid__bottom">
              <button className="covid__btn">Get a free quote</button>
              <div className="covid__telephone">
                <img
                  className="covid__telephoneImg"
                  src={telephone}
                  alt="rasm"
                />
                <div className="covid__number">
                  <p>Call us now</p>
                  <h6>(414) 567 - 2109</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
