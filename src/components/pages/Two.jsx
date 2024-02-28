import React from "react";
import Header from "../header/HeaderBlack";
import VideoItem from "../MainPageItem/ElementVideo.jsx";
import BurgerHeader from "../header/BurgerHeader";
import MainItem from "../MainPageItem/ElementOne.jsx";

// import TopicElement from "../elementMainPage/ElementTopic.jsx";
import ReacomandadtionElement from "../MainPageItem/ElementRecomendatetion.jsx";
function TwoPage() {
  return (
    <>
      <div className="TwoPage">
        <BurgerHeader />
        <Header />
        <VideoItem />
        {/* <TopicElement /> */}
        <MainItem />
      </div>
    </>
  );
}
export default TwoPage;
