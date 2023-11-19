import Styles from "./HeroSection.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import heroSectionImg from "./../../assets/image/restauranfood.webp";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function HeroSection() {
  return (
    <section className={Styles.heroSection}>
      <div className={Styles.content}>
        <h1>Little Lemon Restaurant</h1>
        <h3>Los angles</h3>
        <p>
          Lille Lemon restaurant is a contemporary restaurant that draws from the rich culinary heritage, Chef Timothy Hollingsworth. It is designed to be a social restaurant with an open kitchen merging indoor and outdoor spaces. The
          restaurant’s name, Otium, has its roots in Latin, a word that is meant to emphasize a place where time can be spent on leisurely social activities. Adjacent to one of Los Angeles’ most important cultural corridors — Grand Avenue —
          and next to its newest,
        </p>
        <NavLink>
          Reservation <ArrowForwardIosRoundedIcon />
        </NavLink>
      </div>
      <div className={Styles.image}>
        <img className={Styles.heroSection__image} src={heroSectionImg} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
