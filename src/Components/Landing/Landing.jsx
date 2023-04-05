import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import style from "./Landing.module.scss";

const Landing = ({ aboutRef, setLoading }) => {
  const [lottie1, setLottie1] = useState("");
  const [lottie2, setLottie2] = useState("");
  const isMobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    setLoading(true);
    fetch("/lotties/blossom-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie1(res))
      .finally(() => setLoading(false));
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
  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img
          className={style.bgImg}
          src={
            isMobile
              ? "https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680700152/mobileView-1_ff055z.webp"
              : "https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680700046/landing-img_jckyen.webp"
          }
          alt="kolkata-img"
        />
        <div className={style.lottie1}>
          <Lottie
            options={defaultOptions1}
            height={isMobile ? 350 : 500}
            width={isMobile ? 350 : 500}
          />
        </div>
        <div className={style.lottie2}>
          <Lottie options={defaultOptions2} width={isMobile ? 360 : 400} />
        </div>
      </div>
      <img className={style.logo} src="/images/oikyotan.svg" alt="logo" width={300} />
      <div className={style.down}>
        <button onClick={handleClick}>
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
