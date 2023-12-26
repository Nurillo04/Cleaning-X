import React from "react";
import "./Contact.scss";

import { telephone } from "../../assets";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__left">
              <h3 className="contact__title">Contact Us</h3>
              <p className="contact__text">
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="contact__telephone">
                <img
                  className="contact__telephoneImg"
                  src={telephone}
                  alt="rasm"
                />
                <div className="contact__number">
                  <p>Call us now</p>
                  <h6>(414) 567 - 2109</h6>
                </div>
              </div>
              <hr className="contact__hr" />
              <h5 className="contact__title5">Not convinced yet?</h5>
              <p className="contact__text">
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button className="contact__btn2">Browse our packages</button>
            </div>
            <div className="contact__right">
              {/* <form>
                <label> Full name</label> <br />
                <input type="text" />
                <label>Phone number</label> <br />
                <input type="tel" />
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
