import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import StyledYouTubeVideo from "./yotube";


const AboutCard = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=E7oy-owJKso"
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.png" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="Features"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <div className="app">
        <h1 className="text-center text-3xl font-bold py-4">
       
        </h1>
        <StyledYouTubeVideo videoUrl={youtubeUrl} />
      </div>
    </>
  );
};

export default AboutCard;
