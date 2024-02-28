import React from "react";

function Recomendation() {
  return (
    <div className="recomendation">
      <p className="recomendation__title">Українська малеча</p>
      <div className="recomendation__inner-block">
        <div className="recomendation__item">
          <a className="recomendation__link" href="#">
            <h2 className="recomendation__item-title">Перша тема</h2>
            <p className="recomendation__item-description">Короткий опис:</p>
          </a>
        </div>
        <div className="recomendation__item">
          <a className="recomendation__link" href="#">
            <h2 className="recomendation__item-title">Друга тема</h2>
            <p className="recomendation__item-description">Короткий опис:</p>
          </a>
        </div>
        <div className="recomendation__item ">
          <a className="recomendation__link" href="#">
            <h2 className="recomendation__item-title">Третя тема</h2>
            <p className="recomendation__item-description">Короткий опис:</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
