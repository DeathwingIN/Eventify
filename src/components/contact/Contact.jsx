import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import axios from "axios";
import { App } from "../../firebase_init";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Contact = () => {
   const [msgShow, setMsgShow] = useState(false);
   const [dis, setDis] = useState(false);
  const map =
    'https://www.google.com/maps/d/embed?mid=1p2BLuSU895yyzGwy1O8tgDG7Q7o&hl=en_US&ehbc=2E312F"" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

    function submit(e) {
      e.preventDefault();
      setDis(true);
      const form_data = new FormData(e.target);
      const FS = getFirestore(App);

      const c = collection(FS, "messages");
      const d = {
         name: form_data.get("name"),
         email: form_data.get("email"),
         message: form_data.get("message"),
         subject: form_data.get("subject"),
      };
      addDoc(c, d).then(() => {
         setMsgShow(true);
         console.log(d);
      }).finally(() => {
         setDis(false);
      });
    }

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

            <form onSubmit={submit}>
              <div className="flexSB">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <input type="text" name="subject" id="subject" placeholder="Subject" />
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Create a message here..."></textarea>
              <button disabled={dis} className="primary-btn" type="submit">SEND MESSAGE</button>
            </form>

            <div hidden={!msgShow} style={{background: "lightgreen", margin: "10px 0", padding: "10px"}}>Message sent!</div>

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
