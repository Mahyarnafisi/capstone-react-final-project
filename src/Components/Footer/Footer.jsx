import React from "react";
import Styles from "./Footer.module.css";
import logoImage from "./../../assets/image/Logo .svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.logoContainer}>
        <img src={logoImage} alt="" />
      </div>
      <div className={Styles.navbar}>
        <div className={Styles.quickLink}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Menu</NavLink>
            </li>
            <li>
              <NavLink>Reservation</NavLink>
            </li>
            <li>
              <NavLink>Order Online</NavLink>
            </li>
          </ul>
        </div>
        <div className={Styles.contact}>
          <h2>Contact</h2>
          <ul>
            <li>
              <LocationOnIcon /> 846 S BERENDO ST APT 307 LOS ANGELES <br /> CA 90005-4906 USA
            </li>
            <li>
              <PhoneIcon />
              +99011678999
            </li>
            <li>
              <MailIcon />
              Contact@littlelemon.com
            </li>
          </ul>
        </div>
        <div className={Styles.socialMedia}>
          <h2>Social Media</h2>
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
