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
      if (scroll > 0.9) {
        setDesignation("Deputy UI/UX Head");
      } else if (scroll > 0.42) {
        setDesignation("Deputy Web Head");
      } else if (scroll > 0.26) {
        setDesignation("UI/UX Head");
      } else {
        setDesignation("Web Head");
      }
    } else if (scroll > 0.94) {
      setDesignation("Content Head");
    } else if (scroll > 0.86) {
      setDesignation("Decoration Head");
    } else if (scroll > 0.82) {
      setDesignation("Logistics Head");
    } else if (scroll > 0.69) {
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
    } else if (scroll > 0.05) {
      setDesignation("Chief Coordinator");
    } else {
      setDesignation("Convenor");
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
