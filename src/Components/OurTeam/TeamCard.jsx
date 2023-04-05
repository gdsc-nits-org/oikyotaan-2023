import React from "react";
import styles from "./OurTeam.module.scss";

const TeamCard = ({ name, title, photoUrl }) => {
  return (
    <div className={styles["team-card"]}>
      <img className={styles["team-photo"]} src={photoUrl} alt={name} />
      <h3 className={styles["team-name"]}>{name}</h3>
      <p className={styles["team-title"]}>{title}</p>
      <img
        className={styles["team-bottom"]}
        src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680706770/teamlower_irp7ef.png"
        alt="team-lower"
      />
    </div>
  );
};

export default TeamCard;
