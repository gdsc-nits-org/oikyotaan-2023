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
      if (scroll > 0.91) {
        setDesignation("Deputy UI/UX Head");
      } else if (scroll > 0.75) {
        setDesignation("UI/UX Head");
      } else if (scroll > 0.26) {
        setDesignation("Deputy Web Head");
      } else {
        setDesignation("Web Head");
      }
    } else if (scroll > 0.94) {
      setDesignation("Content Head");
    } else if (scroll > 0.86) {
      setDesignation("Decoration Head");
    } else if (scroll > 0.82) {
      setDesignation("Logistics Head");
    } else if (scroll > 0.681) {
      setDesignation("Hospitality Head");
    } else if (scroll > 0.566) {
      setDesignation("Infra Head");
    } else if (scroll > 0.527) {
      setDesignation("Publicity Head");
    } else if (scroll > 0.451) {
      setDesignation("Executive Head");
    } else if (scroll > 0.41) {
      setDesignation("Event Management Head");
    } else if (scroll > 0.25) {
      setDesignation("Marketing Head");
    } else if (scroll > 0.22) {
      setDesignation("Treasurer");
    } else if (scroll > 0.06) {
      setDesignation("Chief Coordinator");
    } else {
      setDesignation("Convenor");
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
