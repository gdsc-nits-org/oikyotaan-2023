// import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { OurTeam } from "../../Components";
const OurTeamPage = () => {
  const [scroll, setScroll] = useState();
  const [designation, setDesignation] = useState("Developer");

  useEffect(() => {
    if (scroll > 0.543) {
      setDesignation("Senior Core Designer");
    } else if (scroll > 0.326) {
      setDesignation(" Core Developer");
    } else {
      setDesignation("Senior Core Developer");
    }
  }, [scroll]);

  return (
    <div
      className={styles["our-team"]}
      onScroll={(e) => {
        setScroll(
          (e.currentTarget.scrollTop + window.innerHeight / 2) /
            e.currentTarget.scrollHeight
        );
      }}
    >
      <img
        className={styles["team-flower1"]}
        src="../../../assets/team-flower.png"
        alt=""
      />
      <img
        className={styles["team-flower2"]}
        src="../../../assets/team-flower.png"
        alt=""
      />
      <div className={styles.role}>
        <p>{designation}</p>
      </div>
      <OurTeam />
    </div>
  );
};

export default OurTeamPage;
