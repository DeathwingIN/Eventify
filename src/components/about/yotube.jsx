import React from "react";
import YouTube from "@u-wave/react-youtube";

const StyledYouTubeVideo = ({ videoUrl }) => {
  // Extract video ID from the URL
  const videoId = videoUrl.split("v=")[1];

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen bg-gray-100  ">
        <div style={{maxWidth: "600px", width: "100%"}} className="w-72 h-auto sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl">
          <div className="">
            <div className="relative rounded-lg overflow-hidden">
              <YouTube width="600" height="400" video={videoId} autoplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyledYouTubeVideo;
