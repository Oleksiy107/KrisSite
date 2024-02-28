import React from "react";
import MainPage from "./pages/MainPage.jsx";
import PeopleVienna from "./pages/PeopleVienna";
import Three from "./pages/AboutUs";
import BasketPage from "./pages/Two";

// import SmoothieCreate from "./Smothie/SmoothieCreate.jsx";
import { Route, Routes } from "react-router-dom";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Друга" element={<PeopleVienna />} />
      <Route path="/Третя" element={<BasketPage />} />
      <Route path="/ПроНас" element={<Three />} />
    </Routes>
  );
};
