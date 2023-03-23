import React from "react";
import eye from "./Images/eye.svg";
import boatleft from "./Images/boatleft.svg";
import boatright from "./Images/boatright.svg";
import birdLeft from "./Images/birdLeft.svg";
import birdRight from "./Images/birdRight.svg";

import "./landing.css";
export default function Landing() {
  return (
    <div className="landing">
      <img className="Eye" src={eye} alt="" />
      <img className="boatL" src={boatleft} alt="" />
      <img className="boatR" src={boatright} alt="" />
      <img className="birdL" src={birdLeft} alt="" />
      <img className="birdR" src={birdRight} alt="" />
    </div>
  );
}
