/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "react-lottie";
import { Mousewheel, Pagination } from "swiper";
import { useMediaQuery } from "../../Hooks";
import "swiper/scss/pagination";
import styles from "./Artist.module.scss";
import { ArtistCard } from "../../Components";
import data1 from "../../assets/artist.json";
const Artist = ({ setLoading }) => {
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
    <div className={styles.container}>
      <img
        className={styles.bimg}
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701027/bg_qlfbia.webp"
        alt="background"
      />
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
          height={isMobile ? 250 : 400}
          width={isMobile ? 250 : 400}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.design}>
          <img src="/Gallery/design.png" alt="design" />
        </div>
        <p className={styles.tt}>Artist</p>
        <div className={styles.design}>
          <img src="/Gallery/design.png" alt="design" />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          direction="horizontal"
          mousewheel
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="myswiper"
        >
          {data1.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <ArtistCard info={e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Artist;
