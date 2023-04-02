import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useMediaQuery } from "../../Hooks";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <div className={style.container}>
      <ul className={style.nav}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Events
          </NavLink>
        </li>
        <li className={style.logo}>
          <img src="/images/oikyotan.svg" alt="img" width={isMobile ? 100 : 160} />
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Team
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
