import React from "react";
import Styles from "./PageError.module.css";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

function PageError() {
  const navigate = useNavigate();
  const onClickBackToHome = () => {
    navigate("/");
  };
  return (
    <div className={Styles.errorPage}>
      <div className={Styles.messageContent}>
        <ErrorOutlineRoundedIcon />
        <h1>Oops, something is wrong!</h1>
        <h2>Please try again, this page is under maintenance.</h2>
        <button onClick={onClickBackToHome} className={Styles.btnSubmit}>
          Get back to home <HomeRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default PageError;
