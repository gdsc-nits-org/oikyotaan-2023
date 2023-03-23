import React from "react";
import eye from "./Images/eye.svg";
import boatleft from "./Images/boatleft.svg";
import boatright from "./Images/boatright.svg";
import birdLeft from "./Images/birdLeft.svg";
import birdRight from "./Images/birdRight.svg";

import style from "./landing.module.css";
export default function Landing() {
  return (
    <div className={style.landing}>
      <img className={style.Eye} src={eye} alt="" />
      <img className={style.boatL} src={boatleft} alt="" />
      <img className={style.boatR} src={boatright} alt="" />
      <img className={style.birdL} src={birdLeft} alt="" />
      <img className={style.birdR} src={birdRight} alt="" />
    </div>
  );
}
