import React from "react";
import Styles from "./Main.module.css";
import HeroSection from "../HeroSection/HeroSection";
import SpecialMenu from "../SpecialMenu/SpecialMenu";

function Main() {
  return (
    <main className={Styles.Main}>
      <HeroSection />
      <SpecialMenu />
    </main>
  );
}

export default Main;
