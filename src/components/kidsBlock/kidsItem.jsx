import React from "react";
import kidOne from "../../../static/kidOne.jpeg";
export default function kidsItem() {
  return (
    <div className="kidsWrap">
      <section className="kidsWrap__itemFirst">
        <img src={kidOne} alt="Photo" className="kidsWrap__img" />
        <p>Ярмоленко Вероніка, 9 років</p>
      </section>
      <section className="kidsWrap__itemFirst">
        <img src={kidOne} alt="Photo" className="kidsWrap__img" />
        <p>Ярмоленко Вероніка, 9 років</p>
      </section>
      <section className="kidsWrap__itemFirst">
        <img src={kidOne} alt="Photo" className="kidsWrap__img" />
        <p>Ярмоленко Вероніка, 9 років</p>
      </section>
    </div>
  );
}
