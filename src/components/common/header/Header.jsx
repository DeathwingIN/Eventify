import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header className>
        <nav className='PositionSettle flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>About Us</Link>
            </li>
            <li>
              <Link to='/about'>Events</Link>
            </li>
            <li>
              <Link to='/team'>Features</Link>
            </li>
            <li>
              <Link to='/team'>Contact</Link>
            </li>
            <li>
              <Link to='/team'>Singup</Link>
            </li>
           
          </ul>
          {/* <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
