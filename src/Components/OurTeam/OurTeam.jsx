import TeamCard from "./TeamCard";
import styles from "./OurTeam.module.scss";

const coreMembers = [
  {
    name: "Arkadeep Kashyap",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613577/Oikyotaan/IMG-20230322-WA0038_-_Arkadeep_Kashyap_pisyoc.jpg",
  },
  {
    name: "Ankita Baidya",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613013/Oikyotaan/IMG_20230402_185125_-_Ankita_Baidya_o7xln9.jpg",
  },
  {
    name: "Suvadip Sau",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613517/Oikyotaan/WhatsApp_Image_2023-04-03_at_7.50.19_AM_-_Suvadip_Sau_i5kut0.jpg",
  },
  {
    name: "Tanupriya Roy",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613523/Oikyotaan/Tanupriya_Roy_-_ECEA027_TANUPRIYA_ROY_nwjdoh.jpg",
  },
  {
    name: "Subhajeet Dey",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613534/Oikyotaan/pphoto_-_CSE-A-008_Subhajeet_Dey_fvod1f.jpg",
  },
  {
    name: "Swarup Das",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613555/Oikyotaan/IMG20221214151045_-_Swarup_Das_j0rhhu.jpg",
  },
  {
    name: "Reetika Saha",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613566/Oikyotaan/IMG_20220417_083447_917_-_Reetika_Saha_okntjn.jpg",
  },
  {
    name: "Pranab Sarkar",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680612860/Oikyotaan/WhatsApp_Image_2023-04-02_at_5.42.01_PM_-_pranab_sarkar_tcfmho.jpg",
  },
  {
    name: "Satyik Pritam Yogi",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613582/Oikyotaan/IMG_20230320_043036_621_-_Satyik_pritam_Yogi_pxripr.jpg",
  },
  {
    name: "Reeya Hazarika",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613587/Oikyotaan/FB3205B0-965B-4DE0-A58F-57E7E4A90D37_-_Reeya_Hazarika_pz5prj.jpg",
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
