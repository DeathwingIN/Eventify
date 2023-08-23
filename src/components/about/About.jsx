import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import IMAGE from "./bg.jpg";

const About = () => {
  return (
    <>
      <Back title="About Us" />
      {/* <AboutCard /> */}
      <section class="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full sm:w-1/2 ml-3">
          <img class="h-auto w-full" src={IMAGE} alt="Image"></img>
        </div>
        <div class="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-lg ml-3">
          <p class="text-xl font-semibold text-gray-800"> Our Story</p>
          <p class="mt-2 text-gray-600">
           At Eventify, we believe that every event has a story to
            tell. Our journey began with a vision to transform event planning
            into an extraordinary experience, where dreams are meticulously
            crafted into memorable moments. Guided by this vision, we embarked
            on a mission to redefine event planning, one celebration at a time.
            Our Passion: We are not just event planners; we are creators of
            experiences that resonate with the heart and soul of each occasion.
            Our passion for celebrating life's milestones drives us to curate
            events that reflect the unique personalities and aspirations of our
            clients. From intimate gatherings to grand galas, every event is an
            opportunity to weave magic. Join Us in Celebrating Life: We invite
            you to join us on this exciting journey of celebration, creativity,
            and innovation. Whether you're planning a grand gala or an intimate
            gathering, Eventify is here to make your dreams come true. Let's
            create extraordinary moments together and weave stories that will be
            cherished for a lifetime. Experience the Magic of Eventify - Where
            Your Events Are Transformed into Unforgettable Memories.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
