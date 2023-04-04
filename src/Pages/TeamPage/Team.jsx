// import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import styles from "./Team.module.scss";
import { OurTeam } from "../../Components";

const OurTeamPage = () => {
  const [scroll, setScroll] = useState();
  const [designation, setDesignation] = useState("Developer");
  const [selectedType, setSelectedType] = useState("core");
  const [lottie1, setLottie1] = useState("");
  const isMobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    fetch("/lotties/blossom-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie1(res));
  }, []);

  useEffect(() => {
    if (selectedType === "web") {
      if (scroll > 0.54) {
        setDesignation("Deputy UI/UX Head");
      } else if (scroll > 0.543) {
        setDesignation("UI/UX Head");
      } else if (scroll > 0.326) {
        setDesignation("Deputy Web Head");
      } else {
        setDesignation("Web Head");
      }
    } else if (scroll > 0.797) {
      setDesignation("Marketing Head");
    } else if (scroll > 0.607) {
      setDesignation("Hospitality Head");
    } else if (scroll > 0.512) {
      setDesignation("Executive Head");
    } else if (scroll > 0.417) {
      setDesignation("Infra Team Head");
    } else if (scroll > 0.31) {
      setDesignation("Publicity Team Head and Event Management Head");
    } else if (scroll > 0.22) {
      setDesignation("Executive Head");
    } else if (scroll > 0.12) {
      setDesignation("Event Management Head");
    } else {
      setDesignation("Web and Marketing Head");
    }
  }, [scroll, selectedType]);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: lottie1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
      {/* <img className={styles.bimg} src="/Gallery/bg.png" alt="background" /> */}
      <div className={styles.lottie1}>
        <Lottie
          options={defaultOptions1}
          height={isMobile ? 250 : 400}
          width={isMobile ? 250 : 400}
        />
      </div>
      <div className={styles.lottie2}>
        <Lottie
          options={defaultOptions1}
          height={isMobile ? 350 : 400}
          width={isMobile ? 350 : 400}
        />
      </div>
      {/* <img className={styles.bimgLeft} alt="flower" src="/Gallery/flowers.png" /> */}

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
