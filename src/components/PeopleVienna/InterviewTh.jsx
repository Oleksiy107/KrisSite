import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
import HeroThreeFirst from "../../img/HeroThreeFirst.jpeg";
import { InterviewThree } from "../../JSON/InterviewThree";
export default function InterviewTh() {
  const [item, setItem] = useState(InterviewThree);
  return (
    <>
      <Header />
      <Burger />

      {item.map((item) => (
        <div key={item.id} className="PeopleViennaBox" id={"/section3"}>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.Title1}</h2>
            <h2 className="PeopleViennaBox__text">{item.TitleAnswer}</h2>
          </section>
          <section className="PeopleViennaBox__itemWrap PeopleViennaBox__itemWrap--imgWrap">
            <img
              src={HeroThreeFirst}
              alt="Photo"
              className="PeopleViennaBox__imgPhoto"
            />
            <p className="PeopleViennaBox__imgText">
              (ФОТО: Аліна Ярмоленко з особистого архіву)
            </p>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question1}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer1}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question2}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer2}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question3}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer3}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question4}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer4}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question5}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer5}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question6}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer6}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question7}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer7}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question8}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer8}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question9}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer9}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question10}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer10}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question11}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer11}</h2>
          </section>
          <section className="PeopleViennaBox____itemWrap">
            <h2 className="PeopleViennaBox__title">{item.question12}</h2>
            <h2 className="PeopleViennaBox__text">{item.answer12}</h2>
          </section>
        </div>
      ))}
    </>
  );
}
