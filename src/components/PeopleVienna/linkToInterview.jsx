import React from "react";
import HeroThreeFirst from "../../img/HeroThreeFirst.jpeg";
import volonteerSecond from "../../../static/volonteerSecond.jpeg";
import Header from "../header/HeaderBlack";
import photoOne from "../../../static/photoOne.jpeg";

import { HashLink } from "react-router-hash-link";

export default () => {
  return (
    <>
      <section className="team-section">
        {/* <h2 className="team-section__title">Наші герої</h2> */}
        <div className="team-member">
          <section className="team-member__info">
            <HashLink to={"../interviewFirst/#section1"}>
              <img
                src={photoOne}
                alt="Photo"
                className="team-member__photo team-member__photo--firstImg"
              />
              <p className="team-member__text">
                Дробна Ірина
                <br />
              </p>
            </HashLink>
          </section>
          <div className="team-member__info">
            <HashLink to={"../interviewSecond/#section2"}>
              <img
                src={volonteerSecond}
                alt="Photo"
                className="team-member__photo team-member__photo--imgTwo"
              />
              <p className="team-member__text">
                Наталія Чміль
                <br />
              </p>
            </HashLink>
          </div>
          <div className="team-member__info">
            <HashLink to={"../interviewThree/#section3"}>
              <img
                src={HeroThreeFirst}
                alt="Photo"
                className="team-member__photo team-member__photo--imgTwo"
              />
              <p className="team-member__text">
                Аліна Ярмоленко
                <br />
              </p>
            </HashLink>
          </div>
        </div>
      </section>
    </>
  );
};
