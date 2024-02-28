import React, { useState } from "react";
import { AboutUsFile } from "../../JSON/AboutUs";

export default function AboutUsItem() {
  const [itemAboutUs, setItemAboutUs] = useState(AboutUsFile);
  return (
    <>
      {itemAboutUs.map((item) => (
        <div className="aboutUsBox">
          <div className="aboutUsBox__wrapImg">
            <img src={item.img} alt="" className="aboutUsBox__img" />
            <p className="aboutUsBox__textFirst aboutUsBox__textFirst--textAbout">
              {item.textAboutMe}
            </p>
          </div>
          <h2 className="aboutUsBox__title">{item.title}</h2>
          <p className="aboutUsBox__textFirst">{item.textFirst}</p>
          <p className="aboutUsBox__textFirst">{item.textSecond}</p>
          <p className="aboutUsBox__textFirst">{item.textThird}</p>
          <p className="aboutUsBox__textFirst">{item.textLast}</p>
        </div>
      ))}
    </>
  );
}
