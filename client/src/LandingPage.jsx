import React from "react";
import YouTube from "react-youtube";

const LandingPage = () => {
  const videoId = "no7AlKYYfn0";
  const opts = {
    height: "300",
    width: "600",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  return (
    <div>
      <h2>landing page connects</h2>
      <div>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default LandingPage;
