import React from "react";
import Header from "../header/HeaderBlack";
import VideoItem from "../MainPageItem/ElementVideo";
import MainItem from "../MainPageItem/ElementOne.jsx";

// import TopicElement from "../elementMainPage/ElementTopic.jsx";
import ReacomandadtionElement from "../MainPageItem/ElementRecomendatetion.jsx";
import FooterItem from "../Foother/Foother";
import BurgerHeader from "../header/BurgerHeader";
function MainPage() {
  return (
    <>
      <div className="FirstPage">
        <BurgerHeader />
        <Header />
        <VideoItem />

        <MainItem />

        <FooterItem />
      </div>
    </>
  );
}
export default MainPage;
