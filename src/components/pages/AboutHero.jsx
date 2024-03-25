import React from "react";
import Header from "../header/HeaderBlack";
import HeaderBurger from "../header/BurgerHeader";
import Foother from "../Foother/Foother";
import AboutHero from "../AboutHero/AboutHero";

export default function AboutHeroPage() {
  return (
    <>
      <HeaderBurger />
      <Header />

      <AboutHero />
      <Foother />
    </>
  );
}
