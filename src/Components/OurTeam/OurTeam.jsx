import TeamCard from "./TeamCard";
import styles from "./OurTeam.module.scss";

const coreMembers = [
  {
    name: "Paramita Laskar",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680632589/WhatsApp_Image_2023-04-04_at_11.25.37_PM_vru8fw.webp",
  },

  {
    name: "Navoneel Debnath",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680632573/WhatsApp_Image_2023-04-04_at_11.38.10_PM_flrg80.webp",
  },
  {
    name: "Sharmistha Das",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680632915/IMG_20230215_202447_-_Sharmistha_Das_tc0yro.webp",
  },
  {
    name: "Khaled Sultan Barbhuiya",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680631368/WhatsApp_Image_2023-04-04_at_11.12.04_PM_1_ref8bs.webp",
  },
  {
    name: "Robin Paul",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630682/WhatsApp_Image_2023-04-04_at_11.12.03_PM_bkoahe.webp",
  },
  {
    name: "Debojyoti Das",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630671/WhatsApp_Image_2023-04-04_at_11.12.03_PM_1_enygce.webp",
  },
  {
    name: "Arkadeep Kashyap",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613577/Oikyotaan/IMG-20230322-WA0038_-_Arkadeep_Kashyap_pisyoc.webp",
  },
  {
    name: "Azad Ali",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680688499/WhatsApp_Image_2023-04-05_at_3.23.11_PM_qoc0zl.jpg",
  },
  {
    name: "Reeya Hazarika",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613587/Oikyotaan/FB3205B0-965B-4DE0-A58F-57E7E4A90D37_-_Reeya_Hazarika_pz5prj.webp",
  },
  {
    name: "Satyik Pritam Yogi",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613582/Oikyotaan/IMG_20230320_043036_621_-_Satyik_pritam_Yogi_pxripr.webp",
  },
  {
    name: "Sayantan Das",
    photoUrl:
      "https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680641468/WhatsApp_Image_2023-04-05_at_2.13.16_AM_asd9mc.webp",
  },
  {
    name: "Moumita Choudhury",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680684845/WhatsApp_Image_2023-04-05_at_12.36.24_PM_d5iyk4.jpg",
  },
  // {
  //   name: "Cultural 2",
  //   photoUrl:
  //     "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613582/Oikyotaan/IMG_20230320_043036_621_-_Satyik_pritam_Yogi_pxripr.jpg",
  // },
  // {
  //   name: "Cultural 3",
  //   photoUrl:
  //     "https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680641468/WhatsApp_Image_2023-04-05_at_2.13.16_AM_asd9mc.jpg",
  // },
  {
    name: "Ankita Baidya",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613013/Oikyotaan/IMG_20230402_185125_-_Ankita_Baidya_o7xln9.webp",
  },
  {
    name: "Suvadip Sau",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613517/Oikyotaan/WhatsApp_Image_2023-04-03_at_7.50.19_AM_-_Suvadip_Sau_i5kut0.webp",
  },
  {
    name: "Swarup Das",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613555/Oikyotaan/IMG20221214151045_-_Swarup_Das_j0rhhu.webp",
  },
  {
    name: "Tanupriya Roy",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680619060/Oikyotaan/Tanupriya_Roy_-_ECEA027_TANUPRIYA_ROY_nwjdoh.webp",
  },
  {
    name: "Subhajeet Dey",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613534/Oikyotaan/pphoto_-_CSE-A-008_Subhajeet_Dey_fvod1f.webp",
  },
  {
    name: "Niranjan Saha",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634637/IMG20220417213521_-_Niranjan_Saha_xsfrni.webp",
  },
  {
    name: "Suman Das",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680635114/WhatsApp_Image_2023-04-04_at_11.46.14_PM_citopb.webp",
  },
  {
    name: "Reetika Saha",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680613566/Oikyotaan/IMG_20220417_083447_917_-_Reetika_Saha_okntjn.webp",
  },
  {
    name: "Anupama Deb",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680684734/IMG-20230405-WA0003_-_Anupama_Deb_cfscuv.jpg",
  },
  {
    name: "Afsana Yasmin",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634621/IMG_20230119_140948_-_Afsana_Yasmin_kihqv2.webp",
  },
  {
    name: "Pranab Sarkar",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680612860/Oikyotaan/WhatsApp_Image_2023-04-02_at_5.42.01_PM_-_pranab_sarkar_tcfmho.webp",
  },
  {
    name: "Sidhant Ghosh",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634625/IMG_20220217_104126_-_Sidhant_Ghosh_fozpaq.webp",
  },
  {
    name: "Utsav Chowdhury",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680684671/IMG_20230405_115622_-_Utsav_Chowdhury_qv5mzl.jpg",
  },
  {
    name: "Tanuja Dutta",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634650/IMG-20230404-WA0010_-_Nikita_Mandal_u88dhn.webp",
  },
  {
    name: "Nikita Mandal",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634659/IMG-20230405-WA0000_-_Tanuja_Dutta_pavjbh.webp",
  },
  {
    name: "Madhura Chatterjee",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680688517/WhatsApp_Image_2023-04-05_at_3.23.12_PM_x6uqux.jpg",
  },
  {
    name: "Nandini Ghosh",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634632/IMG_20230404_231833_-_Nandini_Ghosh_i2rvdp.webp",
  },
  {
    name: "Arpita Bhattacharjee",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680634617/20230403_155217_-_Arpita_Bhattacharjee_hgihkm.webp",
  },
];

const webMembers = [
  {
    name: "Pratik Majumdar",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630450/Pratik_Majumdar_Square_-_Pratik_Majumdar_xkkrwr.webp",
  },
  {
    name: "Aniruddha Dutta",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680637115/IMG_20211004_100938_2_-_Aniruddha_Dutta_sgvvro.webp",
  },

  {
    name: "Jyotishka Bhattacharjee",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630449/310880262_394976272845602_721811381935518621_n_-_Jyotishka_Bhattacharjee_czfm91.webp",
  },
  {
    name: "Debalina Borah",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680710032/WhatsApp_Image_2023-04-05_at_9.05.59_PM_pirka7.jpg",
  },

  {
    name: "Shibam Debnath",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630089/PXL_20230318_152952455.NIGHT_-_Shibam_debnath_zcmcif.webp",
  },

  {
    name: "Diya Karmakar",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680637117/WhatsApp_Image_2023-04-04_at_11.35.10_PM_-_Diya_Karmakar_n0se4f.webp",
  },
  {
    name: "Tithi Jha",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630448/2019-10-13_13.19.45_-_Tithi_Jha_ehodh6.webp",
  },
  {
    name: "Bijay Jiwrajka",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630092/WhatsApp_Image_2023-04-04_at_9.17.53_PM_-_Bijay_Jiwrajka_dxhxro.webp",
  },
  {
    name: "Jugya Kamal Gogoi",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630449/IMG_1159_1_-_CSE_098_JUGYA_fsaxu4.webp",
  },

  {
    name: "Rohan Jha",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630090/WhatsApp_Image_2022-12-11_at_10.10.41_PM_-_Rohan_jha_xwr72n.webp",
  },

  {
    name: "Priyajit Paul",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630092/WhatsApp_Image_2023-04-04_at_7.49.09_AM_-_Priyajit_Paul_pnjbyv.webp",
  },
  {
    name: "Mrinal Kangsa Banik",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630449/myself_-_Mrinal_Kangsa_Banik_bjpvnn.webp",
  },

  {
    name: "Dimpal Kalita ",
    photoUrl:
      "https://res.cloudinary.com/dnitrnzho/image/upload/v1680630089/Screenshot_2023-03-22-01-06-43-57_6012fa4d4ddec268fc5c7112cbb265e7_-_Dimpal_Kalita_yiyqua.webp",
  },
];
const OurTeam = ({ setchange, type }) => {
  return (
    <div className={styles["our-team"]}>
      <div className={styles["team-heading"]}>
        <div className={styles["title-heading"]}>
          <img
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701238/design_ldyd8q.webp"
            alt="flower"
          />
          <p>Meet Our Team</p>
          <img
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701238/design_ldyd8q.webp"
            alt="flower"
          />
        </div>
      </div>

      <div className={styles["team-type-buttons"]}>
        <button
          className={type === "core" ? styles["active-button"] : ""}
          onClick={() => setchange("core")}
        >
          Core Team
        </button>
        <button
          className={type === "web" ? styles["active-button"] : " "}
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
