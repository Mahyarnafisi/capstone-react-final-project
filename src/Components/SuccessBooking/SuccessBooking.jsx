import React from "react";
import Styles from "./SuccessBooking.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function SuccessBooking() {
  return (
    <div className={Styles.successBooking}>
      <div className={Styles.messageContent}>
        <CheckCircleOutlineIcon />
        <h1>Successful Booking</h1>
        <h2>Thank You.! You're Reservation is confirmed and an email has been sent with reservation details</h2>
      </div>
    </div>
  );
}

export default SuccessBooking;
