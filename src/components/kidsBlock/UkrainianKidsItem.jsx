import React from "react";
import PhotoKids from "../../../static/kidPhoto.jpeg";
import KidsPhoto from "../../../static/kidOne.jpeg";
export default function UkrainianKids() {
  return (
    <div className="HeroKidswWrap">
      <section className="HeroKidswWrap__sectionAbout">
        <img src={KidsPhoto} alt="Photo" className="HeroKidswWrap__img" />
        <p className="HeroKidswWrap__subText"> Ярмоленко Вероніка, 9 років</p>
      </section>
      <section className="HeroKidswWrap__sectionAbout">
        <img src={PhotoKids} alt="Photo" className="HeroKidswWrap__img" />
        <p className="HeroKidswWrap__subText">
          Україна для мене - це ігри з друзями на дитячому майданчику біля
          будинку, літні прогулки з сестрами та улюблене морозиво. Я сумую за
          рідними, я сумую за своїм Києвом
        </p>
      </section>
    </div>
  );
}
