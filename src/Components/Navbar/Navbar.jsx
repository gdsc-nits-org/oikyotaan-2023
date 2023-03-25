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

        <Link to="/events">
          {" "}
          <li>Events</li>
        </Link>

        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/team">
          <li>Team</li>
        </Link>
        <Link to="sponser">
          <li>Sponser</li>
        </Link>
        <Link to="/artists">
          <li>Artists</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
