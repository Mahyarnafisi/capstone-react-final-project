import React from "react";
import Styles from "./About.module.css";
import image1 from "./../../assets/image/Mario and Adrian A.jpg";
import image2 from "./../../assets/image/Mario and Adrian b.jpg";
function About() {
  return (
    <div className={Styles.about}>
      <div className={Styles.about__content}>
        <h2>Little Lemon Restaurant</h2>
        <h4>Los Angles</h4>
        <p>
          Lille Lemon restaurant is a contemporary restaurant that draws from the rich culinary heritage, Chef Timothy Hollingsworth. It is designed to be a social restaurant with an open kitchen merging indoor and outdoor spaces. The
          restaurant’s name, Otium, has its roots in Latin, a word that is meant to emphasize a place where time can be spent on leisurely social activities. Adjacent to one of Los Angeles’ most important cultural corridors — Grand Avenue —
          and next to its newest,
        </p>
      </div>
      <div className={Styles.about__images}>
        <img src={image1} alt="image of chefs" />
        <img src={image2} alt="image of chefs" />
      </div>
    </div>
  );
}

export default About;
