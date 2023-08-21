import React from "react";
import Logo from "../../../Logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <img src={Logo} alt="" srcset="" />
          </div>

          <div className="social">
            <a href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook-f icon "></i>
            </a>
            <a href="https://www.instagrem.com" target="_blank">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
