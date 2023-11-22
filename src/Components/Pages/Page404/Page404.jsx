import React from "react";
import Styles from "./Page404.module.css";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { useNavigate } from "react-router-dom";

function page404() {
  return (
    <div className={Styles.errorPage}>
      <div className={Styles.messageContent}>
        <ErrorOutlineRoundedIcon />
        <h1>Oops, something is wrong!</h1>
        <h2>Please try again, this page is under maintenance.</h2>
        <button onClick={() => {}} className={Styles.btnSubmit}>
          Get back to home
        </button>
      </div>
    </div>
  );
}

export default page404;
