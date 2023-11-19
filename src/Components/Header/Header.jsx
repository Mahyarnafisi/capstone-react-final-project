import React from "react";
import Styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <section className={Styles.header}>
      <nav className={Styles.navbar}>
        <NavLink to="/">
          <img src="#" alt="" />
        </NavLink>
        <ul className={Styles.navbar__list}>
          <li className={Styles.navbar__item}>
            <NavLink className={Styles.navbar__link}>Home</NavLink>
          </li>
          <li className={Styles.navbar__item}>
            <Link className={Styles.navbar__link}>About</Link>
          </li>
          <li className={Styles.navbar__item}>
            <Link className={Styles.navbar__link}>Menu</Link>
          </li>
          <li className={Styles.navbar__item}>
            <NavLink className={Styles.navbar__link}>Reservation</NavLink>
          </li>
          <li className={Styles.navbar__item}>
            <NavLink className={Styles.navbar__link}>Order online</NavLink>
          </li>
          <li className={Styles.navbar__item}>
            <NavLink className={Styles.navbar__link}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
