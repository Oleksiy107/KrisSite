import React from "react";
import MainPage from "./pages/MainPage.jsx";
import PeopleVienna from "./pages/PeopleVienna";
import Three from "./pages/AboutUs";
import AboutHero from "./pages/AboutHero";
import BasketPage from "./pages/Two";

import InterviewFirst from "./PeopleVienna/InterviewFirst";
import InterviewSecond from "./PeopleVienna/InterviewSecond";

import InterviewThree from "./PeopleVienna/InterviewTh";

// import SmoothieCreate from "./Smothie/SmoothieCreate.jsx";
import { Route, Routes } from "react-router-dom";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/УкраїнціУВідні" element={<PeopleVienna />} />
      <Route path="/УкраїнськаМалеча" element={<BasketPage />} />
      <Route path="/НашіГерої" element={<AboutHero />} />
      <Route path="/ПроНас" element={<Three />} />
      <Route path="/interviewFirst" element={<InterviewFirst />} />
      <Route path="/interviewSecond" element={<InterviewSecond />} />
      <Route path="/interviewThree" element={<InterviewThree />} />
    </Routes>
  );
};
