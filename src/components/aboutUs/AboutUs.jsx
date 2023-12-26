import React from "react";

import "./AboutUs.scss";
import { Us1 } from "../../assets";
import { Us2 } from "../../assets";
import { Us3 } from "../../assets";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="container">
          <div className="aboutUs__wrapper">
            <h2 className="aboutUs__title">About Us</h2>
            <p className="aboutUs__text">
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <nav>
              <ul className="aboutUs__list">
                <li className="aboutUs__item">
                  <img className="aboutUs__img" src={Us1} alt=" rasm" />
                  <h4 className="aboutUs__title4">1. Schedule online</h4>
                  <p className="aboutUs__paragraph">
                    Sagittis nibh scelerisque vitae egetolment vulputate sem
                    elementum sed n.
                  </p>
                </li>
                <li className="aboutUs__item">
                  <img className="aboutUs__img" src={Us2} alt=" rasm" />
                  <h4 className="aboutUs__title4">2. Pay online easily</h4>
                  <p className="aboutUs__paragraph">
                    Vitae ut accumsan blandit ullamcorperolm suscipit dui
                    gravida amet at nunc.
                  </p>
                </li>
                <li className="aboutUs__item">
                  <img className="aboutUs__img" src={Us3} alt=" rasm" />
                  <h4 className="aboutUs__title4">3. Get your house cleaned</h4>
                  <p className="aboutUs__paragraph">
                    Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                    cursus eleifend.
                  </p>
                </li>
              </ul>
            </nav>
            <div className="aboutUs__bottom">
              <button className="aboutUs__btn">Get a free quote</button>
              <button className="aboutUs__btn2">Explore services</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
