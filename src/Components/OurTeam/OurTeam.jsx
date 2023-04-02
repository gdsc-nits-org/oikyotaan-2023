import TeamCard from "./TeamCard";
import styles from "./OurTeam.module.scss";

const teamMembers = [
  {
    name: "Bijay Jiwrajka",
    title: "Developer",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Bijay Jiwrajka",
    title: "Designer",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Bijay Jiwrajka",
    title: "Developer",
    photoUrl: "/assets/Group 23.png",
  },
  {
    name: "Bijay Jiwrajka",
    title: "Marketing",
    photoUrl: "/assets/Group 23.png",
  },
];

const OurTeam = () => {
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
      <div className={styles["devCard-container"]}>
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            // title={member.title}
            photoUrl={member.photoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
