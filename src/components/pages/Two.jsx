import React from "react";
import Header from "../header/HeaderBlack";
import VideoItem from "../MainPageItem/ElementVideo.jsx";
import BurgerHeader from "../header/BurgerHeader";
import MainItem from "../MainPageItem/ElementOne.jsx";
import UkrainianKidsItem from "../kidsBlock/UkrainianKidsItem";
// import TopicElement from "../elementMainPage/ElementTopic.jsx";
import ReacomandadtionElement from "../MainPageItem/ElementRecomendatetion.jsx";
import Footer from "../Foother/Foother";
function TwoPage() {
  return (
    <>
      <div className="TwoPage">
        <BurgerHeader />
        <Header />
        <UkrainianKidsItem />
        <MainItem />
        <Footer />
      </div>
    </>
  );
}
export default TwoPage;
