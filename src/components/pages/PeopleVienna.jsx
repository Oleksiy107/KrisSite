import React from "react";
import Header from "../header/HeaderBlack";
import VideoItem from "../MainPageItem/ElementVideo.jsx";
import MainItem from "../MainPageItem/ElementOne.jsx";
// import TopicElement from "../elementMainPage/ElementTopic.jsx";
import BurgerHeader from "../header/BurgerHeader";
import ReacomandadtionElement from "../MainPageItem/ElementRecomendatetion.jsx";
import ViennaItem from "../PeopleVienna/ViennaItem";
import FooterItem from "../Foother/Foother";
function OnePage() {
  return (
    <>
      <div className="OnePage">
        <BurgerHeader />
        <Header />
        <ViennaItem />
        <FooterItem />
        {/* <ReacomandadtionElement /> */}
      </div>
    </>
  );
}
export default OnePage;
