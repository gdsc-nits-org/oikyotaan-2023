// import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { OurTeam } from "../../Components";
const OurTeamPage = () => {
  const [scroll, setScroll] = useState();
  const [designation, setDesignation] = useState("Developer");
  const [selectedType, setSelectedType] = useState("core");
  useEffect(() => {
    if (selectedType === "web") {
      if (scroll > 0.543) {
        setDesignation("Senior Designer");
      } else if (scroll > 0.326) {
        setDesignation("Developer");
      } else {
        setDesignation("Senior Developer");
      }
    } else if (scroll > 0.543) {
      setDesignation("Junior Core Member");
    } else if (scroll > 0.326) {
      setDesignation(" Core Member");
    } else {
      setDesignation("Senior Core Member");
    }
  }, [scroll, selectedType]);

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
      <img className={styles["team-flower1"]} src="/assets/team-flower.png" alt="" />
      <img className={styles["team-flower2"]} src="/assets/team-flower.png" alt="" />
      <div className={styles.role}>
        <p>{designation}</p>
      </div>
      <OurTeam
        setchange={(type) => {
          setSelectedType(type);
        }}
        type={selectedType}
      />
    </div>
  );
};

export default OurTeamPage;
