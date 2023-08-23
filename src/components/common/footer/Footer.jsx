import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css";
import {FaFacebookF, FaYoutube, FaInstagram, FaTwitter} from "react-icons/fa"
import Logo from "../../../Logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[571px] bg-black mt-4">
        <div className="flex flex-col items-center justify-center w-4/5 m-auto h-full py-8">
          <div className="w-full h-[271px]">
            <div className="w-full h-full flex ">
              <div className="w-2/5 h-full">
                <img src={Logo} alt="" srcset="" />
              </div>
              <div className="w-3/5 h-full"></div>
            </div>
          </div>
          <div className="w-full h-[300px]">
          <div className="w-full h-full flex ">
              <div className="w-1/3 h-full flex flex-col">
                <div className="text-white">
                Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.
                </div>
                <div className="w-2/3 flex items-center text-white py-8 text-3xl justify-between">
                  <i><FaFacebookF /></i>
                  <i><FaYoutube/></i>
                  <i><FaInstagram /></i>
                  <i><FaTwitter /></i>
                </div>
              </div>
              <div className="w-1/3 h-full">
                <div className="w-full h-full text-white flex flex-col items-center">
                  <h3 className="text-xl">Sitemap</h3>
                  <ul>
                    <li className="my-2 font-light">Home</li>
                    <li className="my-2 font-light">Events</li>
                    <li className="my-2 font-light">Contact</li>
                    <li className="my-2 font-light">About</li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3 h-full">
              <div className="w-full h-full text-white flex flex-col items-center">
                  <h3>Sitemap</h3>
                  <ul className="">
                    <li>Home</li>
                    <li>Events</li>
                    <li>Contact</li>
                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
