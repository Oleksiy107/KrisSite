import React, { useState } from "react";
import { interviewsecond } from "../../JSON/InterviewSecond";
import volonteerSecond from "../../../static/volonteerSecond.jpeg";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
import { Link } from "react-router-dom";
export default function InterViewSecond() {
  const [itemInterview, setItemInterview] = useState(interviewsecond);

  return (
    <>
      <Header />
      <Burger />
      {itemInterview.map((item) => (
        <div key={item.id} className="PeopleViennaBox" id={"/section2"}>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title PeopleViennaBox__title--Topic">
              {item.firstTitle}
            </h2>
          </section>
          <section className="PeopleViennaBox__itemWrap PeopleViennaBox__itemWrap--imgWrap">
            <img
              src={volonteerSecond}
              alt="Photo"
              className="PeopleViennaBox__imgPhoto"
            />
            <h2 className="PeopleViennaBox__imgText">
              (ФОТО: Наталія Чміль з особистого архіву)
            </h2>
          </section>

          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleInterview}</h2>
            <h2 className="PeopleViennaBox__text">{item.textInterviewFirst}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title PeopleViennaBox__title--titleFont">
              {item.textInterviewSecond}
            </h2>
            <h2 className="PeopleViennaBox__text">{item.textMorning}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__text">
              {item.titleAboutOrganisation}
            </h2>
            <h2 className="PeopleViennaBox__text">
              {item.textAboutOrganisation}
            </h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleVolunteering}</h2>
            <h2 className="PeopleViennaBox__text">{item.textVolunteering}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleBurnout}</h2>
            <h2 className="PeopleViennaBox__text">{item.textBurnout}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleArrive}</h2>
            <h2 className="PeopleViennaBox__text">{item.textArrive}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleAboutSon}</h2>
            <h2 className="PeopleViennaBox__text">{item.textAboutSon}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleAustrolia}</h2>
            <h2 className="PeopleViennaBox__text">{item.textAustrolia}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleDream}</h2>
            <h2 className="PeopleViennaBox__text">{item.textDream}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleFuture}</h2>
            <h2 className="PeopleViennaBox__text">{item.textFuture}</h2>
          </section>
        </div>
      ))}
    </>
  );
}
