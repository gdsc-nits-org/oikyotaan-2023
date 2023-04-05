// import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import styles from "./Team.module.scss";
import { OurTeam } from "../../Components";

const OurTeamPage = ({ setLoading }) => {
  const [scroll, setScroll] = useState();
  const [designation, setDesignation] = useState("Developer");
  const [selectedType, setSelectedType] = useState("core");
  const [lottie1, setLottie1] = useState("");
  const isMobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    setLoading(true);
    fetch("/lotties/blossom-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie1(res))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedType === "web") {
      if (scroll > 0.52) {
        setDesignation("Deputy WEB Head");
      } else if (scroll > 0.43) {
        setDesignation("Deputy UI/UX Head");
      } else if (scroll > 0.26) {
        setDesignation("UI/UX Head");
      } else {
        setDesignation("Web Head");
      }
    } else if (scroll > 0.97) {
      setDesignation("Content & Event Management Head");
    } else if (scroll > 0.94) {
      setDesignation("Content Head");
    } else if (scroll > 0.875) {
      setDesignation("Decoration Head");
    } else if (scroll > 0.81) {
      setDesignation("Logistics Head");
    } else if (scroll > 0.675) {
      setDesignation("Hospitality Head");
    } else if (scroll > 0.57) {
      setDesignation("Infra Head");
    } else if (scroll > 0.54) {
      setDesignation("Publicity and Event Management Head");
    } else if (scroll > 0.47) {
      setDesignation("Executive Head");
    } else if (scroll > 0.44) {
      setDesignation("Event Management Head");
    } else if (scroll > 0.34) {
      setDesignation("Cultural Head");
    } else if (scroll > 0.244) {
      setDesignation("Marketing Head");
    } else if (scroll > 0.21) {
      setDesignation("Marketing & WEB Head");
    } else if (scroll > 0.174) {
      setDesignation("Treasurer");
    } else if (scroll > 0.041) {
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
