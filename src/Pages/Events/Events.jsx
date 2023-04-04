import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import style from "./Events.module.scss";
import { EventCarousel } from "../../Components";

const Events = () => {
  const [lottie1, setLottie1] = useState("");
  const isMobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    fetch("/lotties/blossom-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie1(res));
  }, []);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: lottie1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={style.container}>
      <img className={style.bimg} src="/Gallery/bg.png" alt="background" />
      <div className={style.lottie1}>
        <Lottie
          options={defaultOptions1}
          height={isMobile ? 250 : 400}
          width={isMobile ? 250 : 400}
        />
      </div>
      <div className={style.lottie2}>
        <Lottie
          options={defaultOptions1}
          height={isMobile ? 350 : 400}
          width={isMobile ? 350 : 400}
        />
      </div>
      <img className={style.bimgLeft} alt="flower" src="/Gallery/flowers.png" />
      <div className={style.text}>
        <div className={style.design}>
          <img src="/Gallery/design.png" alt="design" />
        </div>
        <p>Events</p>
        <div className={style.design}>
          <img src="/Gallery/design.png" alt="design" />
        </div>
      </div>
      <div className={style.cardcontainer}>
        <EventCarousel />
      </div>
    </div>
  );
};

export default Events;
