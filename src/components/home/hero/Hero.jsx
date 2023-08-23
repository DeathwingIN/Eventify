import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="Welcome to Eventify"
              title="Best Event Planing Expertise"
            />
            <p>
              The ultimate event management website that caters to all types of
              events from weddings to corporate conferences and everything in
              between
            </p>
            <div className="button">
              <button className="primary-btn">
                About Us <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                Learn More<i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
