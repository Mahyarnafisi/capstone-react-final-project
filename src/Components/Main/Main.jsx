import React from "react";
import Styles from "./Main.module.css";
import HeroSection from "../HeroSection/HeroSection";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import Testimonial from "../Testimonial/Testimonial";
import About from "../About/About";

function Main() {
  return (
    <main className={Styles.Main}>
      <HeroSection />
      <SpecialMenu />
      <Testimonial />
      <About />
    </main>
  );
}

export default Main;
