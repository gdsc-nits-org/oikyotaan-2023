import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import style from "./Landing.module.scss";

const Landing = () => {
  const [lottie1, setLottie1] = useState("");
  const [lottie2, setLottie2] = useState("");
  const isMobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    fetch("/lotties/blossom-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie1(res));

    fetch("/lotties/taxi-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie2(res));
  }, []);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: lottie1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: lottie2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img
          className={style.bgImg}
          src={`images/${isMobile ? "mobile" : "landing-img"}.png`}
          alt="kolkata-img"
        />
        <div className={style.lottie1}>
          <Lottie
            options={defaultOptions1}
            height={isMobile ? 400 : 500}
            width={isMobile ? 400 : 500}
          />
        </div>
        <div className={style.lottie2}>
          <Lottie options={defaultOptions2} width={isMobile ? 360 : 400} />
        </div>
      </div>
      <div className={style.down}>
        <button>
          About Us
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            color="white"
            width={30}
          />
        </button>
      </div>
    </div>
  );
};

export default Landing;
