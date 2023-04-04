import React from "react";
import styles from "./OurTeam.module.scss";

const TeamCard = ({ name, title, photoUrl }) => {
  return (
    <div className={styles["team-card"]}>
      <img className={styles["team-photo"]} src={photoUrl} alt={name} />
      <h3 className={styles["team-name"]}>{name}</h3>
      <p className={styles["team-title"]}>{title}</p>
      <img className={styles["team-bottom"]} src="/assets/teamlower.png" alt="" />
    </div>
  );
};

export default TeamCard;
