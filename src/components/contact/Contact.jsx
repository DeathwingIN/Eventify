import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const map =
    'https://www.google.com/maps/d/embed?mid=1p2BLuSU895yyzGwy1O8tgDG7Q7o&hl=en_US&ehbc=2E312F"" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>001 West 21th Street, Colombo, Sri Lanka</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@eventify.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> + 1234 2355 98</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
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
        </div>
      </section>
    </>
  );
};

export default Contact;
