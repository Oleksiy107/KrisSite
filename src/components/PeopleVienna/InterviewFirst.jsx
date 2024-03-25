import React, { useState } from "react";

import { PeopleDetail } from "../../JSON/InterviewOne";
import { Link } from "react-router-dom";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
export default function ViennaItem() {
  const [itemDetail, setItemDetail] = useState(PeopleDetail);
  return (
    <>
      <Header />
      <Burger />
      {itemDetail.map((item) => (
        <div key={item.id} className="PeopleViennaBox" id={"/section1"}>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title PeopleViennaBox__title--Topic">
              {item.titleAbout}
            </h2>
            <h2 className="PeopleViennaBox__text">{item.text}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap PeopleViennaBox__itemWrap--imgWrap">
            <img
              src={item.img}
              alt="Photo"
              className="PeopleViennaBox__imgPhoto"
            />
            <h2 className="PeopleViennaBox__imgText">
              (ФОТО: Ірина Дробна з особистого архіву)
            </h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleAboutNigth}</h2>
            <h2 className="PeopleViennaBox__text">{item.textAboutNigth}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleAboutProject}</h2>
            <h2 className="PeopleViennaBox__text">
              {item.textAboutProject}
              <a
                href={item.linkSpotify}
                target="_blank"
                className="PeopleViennaBox__link"
              >
                з якими можна ознайомитись за посиланням
              </a>
              .Загалом допомагали університетам-партнерам у часи війни.
            </h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleBidni}</h2>
            <h2 className="PeopleViennaBox__text">{item.textBidni}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleArrive}</h2>
            <h2 className="PeopleViennaBox__text">{item.textArrive}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleBadPeople}</h2>
            <h2 className="PeopleViennaBox__text">{item.textBadPeople}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleSupport}</h2>
            <h2 className="PeopleViennaBox__text">{item.textSupport}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleRulse}</h2>
            <h2 className="PeopleViennaBox__text">{item.textRulse}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleMiss}</h2>
            <h2 className="PeopleViennaBox__text">{item.textMiss}</h2>
          </section>

          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleFuture}</h2>
            <h2 className="PeopleViennaBox__text">{item.textFuture}</h2>
          </section>
        </div>
      ))}
    </>
  );
}
