import React from "react";
import Styles from "./Testimonial.module.css";
import profile1 from "./../../assets/image/image1.jpg";
import profile2 from "./../../assets/image/image 2.webp";
import profile3 from "./../../assets/image/image 3.webp";
import profile4 from "./../../assets/image/image 4.webp";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Testimonial() {
  return (
    <div className={Styles.testimonial}>
      <h2 className={Styles.testimonialTitle}>What People Say About Us !</h2>
      <ul className={Styles.commentList}>
        <li className={Styles.commentItem}>
          <img src={profile1} alt="profile picture" />
          <h2>Gabriella</h2>
          <div className={Styles.commentStar}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel, voluptate labore dignissimos totam nulla rem animi sapiente corporis dicta sint ex aliquam error quibusdam ipsa harum veniam illum. Repellat?</p>
        </li>
        <li className={Styles.commentItem}>
          <img src={profile2} alt="profile picture" />
          <h2>Gabriella</h2>
          <div className={Styles.commentStar}>
            <div className={Styles.commentStar}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel, voluptate labore dignissimos totam nulla rem animi sapiente corporis dicta sint ex aliquam error quibusdam ipsa harum veniam illum. Repellat?</p>
        </li>
        <li className={Styles.commentItem}>
          <img src={profile3} alt="profile picture" />
          <h2>Gabriella</h2>
          <div className={Styles.commentStar}>
            <div className={Styles.commentStar}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel, voluptate labore dignissimos totam nulla rem animi sapiente corporis dicta sint ex aliquam error quibusdam ipsa harum veniam illum. Repellat?</p>
        </li>
        <li className={Styles.commentItem}>
          <img src={profile4} alt="profile picture" />
          <h2>Gabriella</h2>
          <div className={Styles.commentStar}>
            <div className={Styles.commentStar}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel, voluptate labore dignissimos totam nulla rem animi sapiente corporis dicta sint ex aliquam error quibusdam ipsa harum veniam illum. Repellat?</p>
        </li>
      </ul>
    </div>
  );
}

export default Testimonial;
