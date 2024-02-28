import React, { useState } from "react";

import { PeopleDetail } from "../../JSON/DetailPeople";

export default function ViennaItem() {
  const [itemDetail, setItemDetail] = useState(PeopleDetail);
  return (
    <>
      {itemDetail.map((item) => (
        <div className="PeopleViennaBox">
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title PeopleViennaBox__title--Topic">
              {item.titleAbout}
            </h2>
            <p className="PeopleViennaBox__text">{item.text}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap PeopleViennaBox__itemWrap--imgWrap">
            <img
              src={item.img}
              alt="Photo"
              className="PeopleViennaBox__imgPhoto"
            />
            <p className="PeopleViennaBox__imgText">
              (ФОТО: Ірина Дробна з особистого архіву)
            </p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleAboutNigth}</h2>
            <p className="PeopleViennaBox__text">{item.textAboutNigth}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleAboutProject}</h2>
            <p className="PeopleViennaBox__text">
              {item.textAboutProject}
              <a
                href={item.linkSpotify}
                target="_blank"
                className="PeopleViennaBox__link"
              >
                з якими можна ознайомитись за посиланням
              </a>
              .Загалом допомагали університетам-партнерам у часи війни.
            </p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleBidni}</h2>
            <p className="PeopleViennaBox__text">{item.textBidni}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleArrive}</h2>
            <p className="PeopleViennaBox__text">{item.textArrive}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleBadPeople}</h2>
            <p className="PeopleViennaBox__text">{item.textBadPeople}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleSupport}</h2>
            <p className="PeopleViennaBox__text">{item.textSupport}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleRulse}</h2>
            <p className="PeopleViennaBox__text">{item.textRulse}</p>
          </section>
          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleMiss}</h2>
            <p className="PeopleViennaBox__text">{item.textMiss}</p>
          </section>

          <section className="PeopleViennaBox__itemWrap">
            <h2 className="PeopleViennaBox__title">{item.titleFuture}</h2>
            <p className="PeopleViennaBox__text">{item.textFuture}</p>
          </section>
        </div>
      ))}
    </>
  );
}
