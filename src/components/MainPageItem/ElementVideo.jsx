import React from "react";
import video from "../../../static/video.mp4";
function videoItem() {
  return (
    <div className="video-block">
      <video
        controls
        className="video-block__video"
        src={video}
        type="video/mp4"
      ></video>
      <h2 className="video-block__text"></h2>
    </div>
  );
}
export default videoItem;
