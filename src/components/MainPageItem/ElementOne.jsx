import React from "react";
import TeamPhoto from "../../../static/q.jpeg";
import photoOne from "../../../static/photoOne.jpeg";
export default () => {
  return (
    <section className="team-section">
      <h2 className="team-section__title">Наші герої</h2>
      <div className="team-member">
        <div className="team-member__info">
          <img src={photoOne} alt="Photo" className="team-member__photo" />
          <p className="team-member__text">
            Дробна Ірина Юріївна, 23 роки
            <br />
            Хобі: Джаз, відвідини концертів та музеїв, дослідження культурної
            спадщини України
          </p>
        </div>
        <div className="team-member__info">
          <img src={TeamPhoto} alt="Photo" className="team-member__photo" />
          <p className="team-member__text">
            Дробна Ірина Юріївна, 23 роки
            <br />
            Хобі: Джаз, відвідини концертів та музеїв, дослідження культурної
            спадщини України
          </p>
        </div>
        <div className="team-member__info">
          <img src={TeamPhoto} alt="Photo" className="team-member__photo" />
          <p className="team-member__text">
            Дробна Ірина Юріївна, 23 роки
            <br />
            Хобі: Джаз, відвідини концертів та музеїв, дослідження культурної
            спадщини України
          </p>
        </div>
        {/* Add similar structure for other team members */}
      </div>
    </section>
  );
};
