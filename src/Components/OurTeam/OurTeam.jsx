import TeamCard from "./TeamCard";
import styles from "./OurTeam.module.scss";

const coreMembers = [
  {
    name: "Core Member 1",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 2",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 3",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 4",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 5",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 6",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 7",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Core Member 8",
    photoUrl: "/assets/Group 23.png",
  },
];

const webMembers = [
  {
    name: "Bijay Jiwrajka 1",
    photoUrl: "/assets/Group 23.png",
  },

  {
    name: "Bijay Jiwrajka 2",
    photoUrl: "/assets/Group 23.png",
  },

  {
    name: "Bijay Jiwrajka 3",
    photoUrl: "/assets/Group 23.png",
  },

  {
    name: "Bijay Jiwrajka 4",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Bijay Jiwrajka 5",
    photoUrl: "/assets/Group 23.png",
  },

  {
    name: "Bijay Jiwrajka 6",
    photoUrl: "/assets/Group 23.png",
  },

  {
    name: "Bijay Jiwrajka 7",
    photoUrl: "/assets/Group 23.png",
  },

  {
    name: "Bijay Jiwrajka 8",
    photoUrl: "/assets/Group 23.png",
  },
];
const OurTeam = ({ setchange, type }) => {
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
          className={type === "core" ? styles["active-button"] : ""}
          onClick={() => setchange("core")}
        >
          Core Team
        </button>
        <button
          className={type === "web" ? styles["active-button"] : ""}
          onClick={() => setchange("web")}
        >
          Web Team
        </button>
      </div>
      <div className={styles["devCard-container"]}>
        {type === "core"
          ? coreMembers.map((member) => (
              <TeamCard key={member.name} name={member.name} photoUrl={member.photoUrl} />
            ))
          : webMembers.map((member) => (
              <TeamCard key={member.name} name={member.name} photoUrl={member.photoUrl} />
            ))}
      </div>
    </div>
  );
};

export default OurTeam;
