import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import style from "./Events.module.scss";
import { EventCarousel } from "../../Components";

const Events = ({ setLoading }) => {
  const [lottie1, setLottie1] = useState("");
  const isMobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    setLoading(true);
    fetch("/lotties/blossom-lottie.json")
      .then((data) => data.json())
      .then((res) => setLottie1(res))
      .finally(() => setLoading(false));
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
      <img
        className={style.bimg}
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701027/bg_qlfbia.webp"
        alt="background"
      />
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
      <img
        className={style.bimgLeft}
        alt="flower"
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701128/flowers_xrd5zy.webp"
      />
      <div className={style.text}>
        <div className={style.design}>
          <img
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701238/design_ldyd8q.webp"
            alt="design"
          />
        </div>
        <p>Events</p>
        <div className={style.design}>
          <img
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701238/design_ldyd8q.webp"
            alt="design"
          />
        </div>
      </div>
      <div className={style.cardcontainer}>
        <EventCarousel />
      </div>
    </div>
  );
};

export default Events;
