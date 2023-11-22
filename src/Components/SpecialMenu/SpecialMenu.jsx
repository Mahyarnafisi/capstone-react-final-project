import Styles from "./SpecialMenu.module.css";
import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import greekSalad from "./.././../assets/image/greek salad.webp";
import lemonDessert from "./.././../assets/image/lemon dessert.jpg";
import VipMenu from "./.././../assets/image/bruchetta.svg";

import { NavLink, Link } from "react-router-dom";

function SpecialMenu() {
  return (
    <section className={Styles.specialMenu}>
      <div className={Styles.row}>
        <h1 className={Styles.specialMenu__title}>This week special!</h1>
        <NavLink to="error" className={Styles.specialMenu__btnOrderOnline}>
          Online menu <ArrowForwardIosRoundedIcon />
        </NavLink>
      </div>
      <div className={Styles.row}>
        <div className={Styles.specialMenu__list}>
          <div className={Styles.specialMenu__item}>
            <div className={Styles.item__img}>
              <img src={greekSalad} alt="greek salad special menu in little lemon restaurant " />
            </div>
            <div className={Styles.item__body}>
              <div className={Styles.itemRow}>
                <h2>Greek Salad</h2>
                <h5>$21.5</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur quibusdam cumque sed dignissimos. Animi illum cupiditate provident. Voluptatibus explicabo quia dolore porro ad culpa consequuntur vel eos suscipit
                pariatur.
              </p>
            </div>
            <div className={Styles.item__footer}>
              <Link to="error">Order a delivery</Link>
            </div>
          </div>

          <div className={Styles.specialMenu__item}>
            <div className={Styles.item__img}>
              <img src={lemonDessert} alt="greek salad special menu in little lemon restaurant " />
            </div>
            <div className={Styles.item__body}>
              <div className={Styles.itemRow}>
                <h2>lemon dessert</h2>
                <h5>$28.5</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur quibusdam cumque sed dignissimos. Animi illum cupiditate provident. Voluptatibus explicabo quia dolore porro ad culpa consequuntur vel eos suscipit
                pariatur.
              </p>
            </div>
            <div className={Styles.item__footer}>
              <Link to="error">Order a delivery</Link>
            </div>
          </div>
          <div className={Styles.specialMenu__item}>
            <div className={Styles.item__img}>
              <img src={VipMenu} alt="greek salad special menu in little lemon restaurant " />
            </div>
            <div className={Styles.item__body}>
              <div className={Styles.itemRow}>
                <h2>Bruchetta</h2>
                <h5>$19.5</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur quibusdam cumque sed dignissimos. Animi illum cupiditate provident. Voluptatibus explicabo quia dolore porro ad culpa consequuntur vel eos suscipit
                pariatur.
              </p>
            </div>
            <div className={Styles.item__footer}>
              <Link to="error">Order a delivery</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialMenu;
