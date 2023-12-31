import React from "react";
import Styles from "./Header.module.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import brandLogo from "./../../assets/image/Logo .svg";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <section className={Styles.header}>
      <nav className={Styles.navbar}>
        <NavLink to="/">
          <img className={Styles.navbar__brandLogo} src={brandLogo} alt="" />
        </NavLink>
        <ul className={Styles.navbar__list}>
          <li className={Styles.navbar__item}>
            <NavLink to="/" className={Styles.navbar__link}>
              <HomeRoundedIcon />
              Home
            </NavLink>
          </li>
          <li className={Styles.navbar__item}>
            <a href="#about-section" className={Styles.navbar__link}>
              About <KeyboardArrowDownRoundedIcon />
            </a>
          </li>
          <li className={Styles.navbar__item}>
            <a href="#specialMenu-section" className={Styles.navbar__link}>
              Menu <KeyboardArrowDownRoundedIcon />
            </a>
          </li>
          <li className={Styles.navbar__item}>
            <NavLink to="reservation" className={Styles.navbar__link}>
              {" "}
              <RestaurantMenuRoundedIcon /> Reservation
            </NavLink>
          </li>
          <li className={Styles.navbar__item}>
            <NavLink to="error" className={Styles.navbar__link}>
              {" "}
              <ShoppingBasketRoundedIcon /> Order online
            </NavLink>
          </li>
          <li className={`${Styles.navbar__item} ${Styles.navbar__btnLogin}`}>
            <NavLink to="error" className={Styles.navbar__link}>
              <PersonRoundedIcon /> Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
