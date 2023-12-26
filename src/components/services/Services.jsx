import React from "react";
import "./Services.scss";

import { ser1 } from "../../assets";
import { ser2 } from "../../assets";
import { ser3 } from "../../assets";

const services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="services__wrapper">
            <div className="services__top">
              <h2 className="services__title">Our Services</h2>
              <button className="services__btn2">Explore services</button>
            </div>
            <div className="services__bottom">
              <nav>
                <ul className="services__list">
                  <li className="services__item">
                    <img className="services__img" src={ser1} alt=" rasm" />
                    <h4 className="services__title4">House cleaning</h4>
                    <p className="services__paragraph">
                      Lorem ipsum dolor sit amet consecte tur adipiscing elit
                      semper dalaracc lacus vel facilisis volutpat est.
                    </p>
                  </li>
                  <li className="services__item">
                    <img className="services__img" src={ser2} alt=" rasm" />
                    <h4 className="services__title4">Office cleaning</h4>
                    <p className="services__paragraph">
                      Lorem ipsum dolor sit amet consecte tur adipiscing elit
                      semper dalaracc lacus vel facilisis volutpat est.
                    </p>
                  </li>
                  <li className="services__item">
                    <img className="services__img" src={ser3} alt=" rasm" />
                    <h4 className="services__title4">Industrial cleaning</h4>
                    <p className="services__paragraph">
                      Lorem ipsum dolor sit amet consecte tur adipiscing elit
                      semper dalaracc lacus vel facilisis volutpat est.
                    </p>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
