// import { useState } from "react";
// import { useInView } from "react-intersection-observer";
import styles from "./Team.module.scss";
import { OurTeam } from "../../Components";

// const roles = ["developer", "designer", "other"];

const OurTeamPage = () => {
  return (
    <div className={styles["our-team"]}>
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
        <p>Developer</p>
      </div>
      <OurTeam />
    </div>
  );
};

export default OurTeamPage;
