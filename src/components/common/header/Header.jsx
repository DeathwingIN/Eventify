import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header className>
        <nav className="PositionSettle flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about" target="_blank" rel="noopener noreferrer">
                <Link to="/about" target="_blank" rel="noopener noreferrer">
                  About Us
                </Link>
              </a>
            </li>
            <li>
              <a href="/events" target="_blank" rel="noopener noreferrer">
                <Link to="/events" target="_blank" rel="noopener noreferrer">
                  Events
                </Link>
              </a>
            </li>
            <li>
              <a href="/pricing" target="_blank" rel="noopener noreferrer">
                <Link to="/pricing" target="_blank" rel="noopener noreferrer">
                  Features
                </Link>
              </a>
            </li>
            <li>
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                <Link to="/contact" target="_blank" rel="noopener noreferrer">
                  Contact
                </Link>
              </a>
            </li>
            <li>
              <a href="/signup" target="_blank" rel="noopener noreferrer">
                <Link to="/signup" target="_blank" rel="noopener noreferrer">
                  Signup
                </Link>
              </a>
            </li>
          </ul>
          {/* <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> */}
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
