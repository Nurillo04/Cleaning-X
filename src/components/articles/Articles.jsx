import React from "react";
import "./Articles.scss";
import { articlesImg1 } from "../../assets";
import { articlesImg2 } from "../../assets";

const Articles = () => {
  return (
    <>
      <div className="articles">
        <div className="container">
          <div className="articles__wrapper">
            <div className="articles__top">
              <div className="articles__top-left">
                <h2 className="articles__top-title">Articles & resources</h2>
              </div>
              <div className="articles__top-right">
                <button className="articles__btn1">Get a free quote</button>
                <button className="articles__btn2">Browse articles</button>
              </div>
            </div>
            <div className="articles__bottom">
              <nav>
                <ul className="articles__list">
                  <li className="articles__item">
                    <img
                      className="articles__img"
                      src={articlesImg1}
                      alt=" rasm"
                    />
                    <div className="articles__card">
                      <h4 className="articles__title4">
                        8 best vacuum cleaners to clean any mess for your home
                        in 2022
                      </h4>
                      <p className="articles__paragraph">
                        Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                        justo quis odio sit sit ac port titor sit males.
                      </p>
                      <p className="articles__data">Jan 28, 2022</p>
                    </div>
                  </li>
                  <li className="articles__item">
                    <img
                      className="articles__img"
                      src={articlesImg2}
                      alt=" rasm"
                    />
                    <div className="articles__card">
                      <h4 className="articles__title4">
                        How to properly disinfect your phone and other
                        electronics
                      </h4>
                      <p className="articles__paragraph">
                        Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                        justo quis odio sit sit ac port titor sit males.
                      </p>
                      <p className="articles__data">Feb 1, 2022</p>
                    </div>
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

export default Articles;
