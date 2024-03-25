import React, { useState } from "react";
import { HelpPeople } from "../../JSON/HelpPeople";

export default function FooterItem() {
  const [itemJson, setItemJson] = useState(HelpPeople);
  return (
    <div className="footerWrap">
      {itemJson.map((item) => (
        <div className="footerWrap__HelpBlock" key={item.id}>
          <section className="footerWrap__firstWrap">
            <h2 className="footerWrap__titles">{item.titleHelp}</h2>

            <a
              href={item.link}
              className="footerWrap__linkHelp"
              target="_blank"
              rel="noopener noreferrer"
            >
              start.wien.gv.at
            </a>
          </section>
          <div className="footerWrap__messageLink">
            <h2 className="footerWrap__titles">{item.titleMessage}</h2>
            <section className="footerWrap__sectionImg">
              <a
                href={item.linkGmail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.gmailMessageImg}
                  alt="gmail"
                  className="footerWrap__imgMessage footerWrap__imgMessage--gmailMessageImg"
                />
              </a>

              <a href={item.linkIns} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.InstagramMessageImg}
                  alt="instagram"
                  className="footerWrap__imgMessage footerWrap__imgMessage--InstagramMessageImg"
                />
              </a>
              <a href={item.linkFace} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.FacebookMessageImg}
                  alt="facebook"
                  className="footerWrap__imgMessage footerWrap__imgMessage--FacebookMessageImg"
                />
              </a>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
