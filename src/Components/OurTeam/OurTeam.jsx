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
        <h2>MEET OUR TEAM</h2>
        <img src="/assets/team-heading.png" alt="" />
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
