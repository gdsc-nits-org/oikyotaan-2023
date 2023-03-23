import React from "react";
import eye from "./Images/eye.svg";
import boatleft from "./Images/boatleft.svg";
import boatright from "./Images/boatright.svg";
import birdLeft from "./Images/birdLeft.svg";
import birdRight from "./Images/birdRight.svg";

import style from "./landing.module.scss";
export default function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.Eye}>
        <img src={eye} alt="" />
      </div>

      <div className={style.boatL}>
        <img src={boatleft} alt="" />
      </div>

      <div className={style.boatR}>
        <img src={boatright} alt="" />
      </div>

      <div className={style.birdL}>
        <img src={birdLeft} alt="" />
      </div>

      <div className={style.birdR}>
        <img src={birdRight} alt="" />
      </div>
    </div>
  );
}
