import React from "react";
import HeroOne from "../../img/HeroOne.jpeg";
import HeroOne_one from "../../img/HeroOne_one.jpeg";
import HeroOne_two from "../../img/HeroOne_two.jpeg";
import HeroOne_three from "../../img/HeroOne_three.jpeg";
import HeroOne_four from "../../img/HeroOne_four.jpeg";
import HeroOne_five from "../../img/HeroOne_five.jpeg";
import HeroTwo_first from "../../img/InterViewFirstImg.jpeg02.jpeg";
import HeroTwo_second from "../../img/InterViewFirstImg.jpeg";
import photoOne from "../../../static/photoOne.jpeg";

import HeroThreeFirst from "../../img/HeroThreeFirst.jpeg";
import HeroThreeTwo from "../../img/HeroThreeSecond.jpeg";
import HeroThreeTh from "../../img/HeroThreeTh.jpeg";
import HeroThreeFour from "../../img/HeroThreeFour.jpeg";
import HeroThreeNoteOne from "../../img/HeroThreeNoteOne.jpeg";
import HeroThreeNoteTwo from "../../img/HeroThreeNoteTwo.jpeg";
export default function AboutHero() {
  return (
    <div className="HeroWrap">
      <section className="HeroWrap__titleWrap">
        <h2 className="HeroWrap__title">Наші герої</h2>
      </section>

      <div className="HeroWrap__wrappperAboutHere">
        <section className="HeroWrap__sectionAbout">
          <img src={HeroOne} alt="HeroImg" className="HeroWrap__img" />
        </section>

        <section className="HeroWrap__sectionAbout">
          <img src={HeroOne_one} alt="HeroImg" className="HeroWrap__img" />
          <h2 className="HeroWrap__subText">
            Чміль Наталка Олександрівна, 44 роки. Хобі : піші і вело прогулянки
            на природі , читання історичних книг.
          </h2>
        </section>
        <section className="HeroWrap__sectionAbout">
          <img src={HeroOne_two} alt="HeroImg" className="HeroWrap__img" />
          <h2 className="HeroWrap__subText">
            Сімейна пара волонтерів, які співпрацюють з Карітас. Дружина Наталя
            з України і Норберт.
          </h2>
        </section>
        <section className="HeroWrap__sectionAbout">
          <img src={HeroOne_three} alt="HeroImg" className="HeroWrap__img" />
          <h2 className="HeroWrap__subText">
            Сімʼя дітей з Маріуполя. Діти носили на шиях свистки, щоб їх можна
            було знайти під завалами сховища. З окупованої території вони
            вибиралась більше 14 днів пішки. І таким сімʼям приходилось надавати
            психологічну допомогу
          </h2>
        </section>
        <section className="HeroWrap__sectionAbout">
          <img src={HeroOne_four} alt="HeroImg" className="HeroWrap__img" />
          <h2 className="HeroWrap__subText">
            Гуманітарна допомога (м. Львів )
          </h2>
        </section>
        <section className="HeroWrap__sectionAbout">
          <img src={HeroOne_five} alt="HeroImg" className="HeroWrap__img" />
          <h2 className="HeroWrap__subText">
            Віденьська клініка, де працює колега Наталії з клініки. Саме там
            Наталія зрозуміла, що хоче продовжити працювати в медицині в Австрії
            З того моменту Наталія почала процес інтеграції і визнання диплому
          </h2>
        </section>

        <div className="HeroWrap">
          <section className="HeroWrap__sectionAbout">
            <img src={photoOne} alt="HeroImg" className="HeroWrap__img" />
            <h2 className="HeroWrap__subText">
              Дробна Ірина, 23 роки Хобі: Джаз, відвідини концертів та музеїв,
              дослідження культурної спадщини України
            </h2>
          </section>
          <section className="HeroWrap__sectionAbout">
            <img src={HeroTwo_first} alt="HeroImg" className="HeroWrap__img" />
            <h2 className="HeroWrap__subText">
              Фото з Мовного кафе (SprachenCaPHé), який проводився в нашому
              педагогічному коледжі (Pädagogische Hochschule Wien) і на якому ми
              презентували українську мову
            </h2>
          </section>
          <section className="HeroWrap__sectionAbout">
            <img src={HeroTwo_second} alt="HeroImg" className="HeroWrap__img" />
            <h2 className="HeroWrap__subText">
              Літня школа від Лернополіса у Байройті
            </h2>
          </section>
        </div>
        <div className="HerowWrap">
          <section className="HeroWrap__sectionAbout">
            <img src={HeroThreeFirst} alt="HeroImg" className="HeroWrap__img" />
            <h2 className="HeroWrap__subText">
              Ярмоленко Аліна Олександрівна, 19 років. Хобі: займається
              манікюром, захоплюється гемологією ( має власну колекцію
              мінералів) та любить психологію
            </h2>
          </section>

          <section className="HeroWrap__sectionAbout">
            <img src={HeroThreeTh} alt="HeroImg" className="HeroWrap__img" />
            <h2>1 Бомбосховище в Києві</h2>
          </section>
          <section className="HeroWrap__sectionAbout">
            <img src={HeroThreeFour} alt="HeroImg" className="HeroWrap__img" />
            <h2>2 Бомбосховище в Києві</h2>
          </section>
          <section className="HeroWrap__sectionAbout">
            <img src={HeroThreeTwo} alt="HeroImg" className="HeroWrap__img" />
            <h2>Вибухи м. Київ</h2>
          </section>
          <section className="HeroWrap__sectionAbout">
            <img
              src={HeroThreeNoteOne}
              alt="HeroImg"
              className="HeroWrap__img"
            />
            <h2>
              Особистий щоденник Аліни, написаний в бомбосховищі, 2022 рік.
            </h2>
          </section>
          <section className="HeroWrap__sectionAbout">
            <img
              src={HeroThreeNoteTwo}
              alt="HeroImg"
              className="HeroWrap__img"
            />
            <h2>
              Особистий щоденник Аліни, написаний в бомбосховищі, 2022 рік.
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}
