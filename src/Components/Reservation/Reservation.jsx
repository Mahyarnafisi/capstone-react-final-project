import React from "react";
import Styles from "./Reservation.module.css";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("confirm");
    console.log(e);
  };
  return (
    <div className={Styles.reservation}>
      <section className={Styles.image}></section>
      <form className={Styles.form} onSubmit={onSubmitHandler}>
        <h1>Reservation</h1>
        <h2>Personal Details</h2>
        <section className={Styles.row}>
          <input type="text" name="Occassion" id="occassion" placeholder="Occassion" required maxLength="10" />
          <input type="date" name="date" id="date" required />
          <input type="number" name="number" id="number" min="2" max="20" placeholder="No of Guests" required />
          <input type="time" name="time" id="time" required />
        </section>
        <h2>Booking Details</h2>
        <section className={Styles.row}>
          <input type="text" name="fullname" id="fullname" maxLength="30" required placeholder="Full Name" />
          <input type="email" name="email" id="email" required placeholder="E-mail Id" maxLength="30" />
          <input type="text" name="mobile" id="mobile" minLength="5" maxLength="10" placeholder="(+01) Mobile Number" required />
        </section>

        <section className={Styles.row}>
          <h2>Special Request:</h2>
          <textarea name="request" id="request" placeholder="We would like to know about special request that you have." />
        </section>
        <button type="submit" className={Styles.btnSubmit}>
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default Reservation;
