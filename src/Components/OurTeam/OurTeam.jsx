import { useState } from "react";
import TeamCard from "./TeamCard";
import styles from "./OurTeam.module.scss";

const teamMembers = [
  {
    name: "Core Member 1",
    photoUrl: "/assets/Group 23.png",
    teamType: "core",
  },
  {
    name: "Core Member 2",
    photoUrl: "/assets/Group 23.png",
    teamType: "core",
  },
  {
    name: "Core Member 3",
    photoUrl: "/assets/Group 23.png",
    teamType: "core",
  },
  {
    name: "Core Member 4",
    photoUrl: "/assets/Group 23.png",
    teamType: "core",
  },
  {
    name: "Bijay Jiwrajka",
    photoUrl: "/assets/Group 23.png",
    teamType: "web",
  },

  {
    name: "Bijay Jiwrajka",
    photoUrl: "/assets/Group 23.png",
    teamType: "web",
  },

  {
    name: "Bijay Jiwrajka",
    photoUrl: "/assets/Group 23.png",
    teamType: "web",
  },

  {
    name: "Bijay Jiwrajka",
    photoUrl: "/assets/Group 23.png",
    teamType: "web",
  },
];

const OurTeam = () => {
  const [selectedType, setSelectedType] = useState("core");

  const filteredMembers = teamMembers.filter(
    (member) => member.teamType === selectedType
  );

  return (
    <div className={styles["our-team"]}>
      <div className={styles["team-heading"]}>
        <div className={styles["title-heading"]}>
          <img src="/assets/title-flower.png" alt="flower" />
          <h2>Meet Our Team</h2>
          <img src="/assets/title-flower.png" alt="flower" />
        </div>
        <img src="/assets/team-heading.png" alt="flower" />
      </div>
      <div className={styles["team-type-buttons"]}>
        <button
          className={selectedType === "core" ? styles["active-button"] : ""}
          onClick={() => setSelectedType("core")}
        >
          Core Team
        </button>
        <button
          className={selectedType === "web" ? styles["active-button"] : ""}
          onClick={() => setSelectedType("web")}
        >
          Web Team
        </button>
      </div>
      <div className={styles["devCard-container"]}>
        {filteredMembers.map((member) => (
          <TeamCard key={member.name} name={member.name} photoUrl={member.photoUrl} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
