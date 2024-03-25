import React from "react";
import video from "../../../static/video.mp4";
import KidsPhoto from "../../../static/kidOne.jpeg";
import { HashLink } from "react-router-hash-link";

function videoItem() {
  return (
    <>
      <div className="video-block">
        <video
          controls
          className="video-block__video"
          src={video}
          type="video/mp4"
        ></video>
        <section className="video-block__wrapImgs">
          <h2 className="video-block__texts">Українська малеча</h2>
          <section className="video-block__wrapImg">
            <div className="video-block__imgBlock">
              <HashLink to={"/УкраїнськаМалеча"}>
                <img src={KidsPhoto} alt="Kid" className="video-block__img" />

                <p className="video-block__text">Ярмоленко Вероніка, 9 років</p>
              </HashLink>
            </div>
            {/* <div className="video-block__imgBlock">
              <HashLink to={"/УкраїнськаМалеча"}>
                <img src={KidsPhoto} alt="Kid" className="video-block__img" />
                <p className="video-block__text">Ярмоленко Вероніка, 9 років</p>
              </HashLink>
            </div>
            <div className="video-block__imgBlock">
              <HashLink to={"/УкраїнськаМалеча"}>
                <img src={KidsPhoto} alt="Kid" className="video-block__img" />
                <p className="video-block__text">Ярмоленко Вероніка, 9 років</p>
              </HashLink>
            </div>
            <div className="video-block__imgBlock">
              <HashLink to={"/УкраїнськаМалеча"}>
                <img src={KidsPhoto} alt="Kid" className="video-block__img" />
                <p className="video-block__text">Ярмоленко Вероніка, 9 років</p>
              </HashLink>
            </div> */}
          </section>
        </section>
      </div>
    </>
  );
}
export default videoItem;
