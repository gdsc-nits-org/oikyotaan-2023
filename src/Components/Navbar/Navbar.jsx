import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import style from "./Navbar.module.scss";
import { useMediaQuery } from "../../Hooks";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const isMobile = useMediaQuery("(max-width: 700px)");

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMobile(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div ref={wrapperRef} className={style.container}>
      <div className={style.new}>
        <img
          src="/images/oikyotan.svg"
          alt="img"
          className={mobile === false ? style.img : style.imgmob}
        />
      </div>
      {/* <ul className={style.nav}> */}
      <ul className={mobile === false ? style.nav : style.navmob}>
        <li className={style.li1}>
          <img src="/images/home.png" alt="img" className={style.imgm} />
          <NavLink
            onClick={(val) => setMobile(!val)}
            to="/"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <img src="/images/clipboard.png" alt="img" className={style.imgm} />
          <NavLink
            onClick={(val) => setMobile(!val)}
            to="/events"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Events
          </NavLink>
        </li>
        <li className={style.logo}>
          <img
            src="/images/oikyotan.svg"
            alt="img"
            width={isMobile ? 0 : 160}
            className={style.img1}
          />
        </li>
        <li className={style.li5}>
          <img src="/images/image.png" alt="img" className={style.imgm} />
          <NavLink
            onClick={(val) => setMobile(!val)}
            to="/gallery"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <img src="/images/users.png" alt="img" className={style.imgm} />
          <NavLink
            onClick={(val) => setMobile(!val)}
            to="/team"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Team
          </NavLink>
        </li>
      </ul>

      <button className={style.mobileview} onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <FaArrowLeft className={style.cross1} />
        ) : (
          <FaBars className={style.cross} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
