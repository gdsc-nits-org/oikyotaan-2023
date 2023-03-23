import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <ul className={style.Navbar_main}>
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>

        <Link to="/Events">
          {" "}
          <li>Events</li>
        </Link>

        <Link to="/Gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/Team">
          <li>Team</li>
        </Link>
        <Link to="/Sponser">
          <li>Sponser</li>
        </Link>
        <Link to="/Artists">
          <li>Artists</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
