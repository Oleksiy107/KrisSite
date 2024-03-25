import React from "react";
import Header from "../header/HeaderBlack";
import VideoItem from "../MainPageItem/ElementVideo.jsx";
import MainItem from "../MainPageItem/ElementOne.jsx";
// import TopicElement from "../elementMainPage/ElementTopic.jsx";
import BurgerHeader from "../header/BurgerHeader";
import ReacomandadtionElement from "../MainPageItem/ElementRecomendatetion.jsx";
import ViennaItem from "../PeopleVienna/InterviewSecond";
import FooterItem from "../Foother/Foother";
// import InterViewSecond from "../PeopleVienna/InterViewSecond";
import LinkToInterview from "../PeopleVienna/linkToInterview";

function OnePage() {
  return (
    <>
      <div className="OnePage">
        <BurgerHeader />
        <Header />
        <LinkToInterview />
      
       
        <FooterItem />
      
      </div>
    </>
  );
}
export default OnePage;
