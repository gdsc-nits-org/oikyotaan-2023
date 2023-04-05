/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import Lottie from "react-lottie";
import { useMediaQuery } from "../../Hooks";
import images from "./images";
import "./Gallery.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Gallery.module.scss";
import { GalleryCard } from "../../Components/index";
const Gallery = ({ setLoading }) => {
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
      <img
        className={styles.bimgLeft}
        alt="flower"
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701128/flowers_xrd5zy.webp"
      />
      <div className={styles.text}>
        <div className={styles.design}>
          <img
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701238/design_ldyd8q.webp"
            alt="design"
          />
        </div>
        <p className={styles.tt}>Gallery</p>
        <div className={styles.design}>
          <img
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701238/design_ldyd8q.webp"
            alt="design"
          />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.swiperLeftArrow} id="leftArrow">
          <img src="/Gallery/arrow.png" alt="arrow" />
        </div>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides
          slidesPerView={4}
          initialSlide={Math.floor(images.length / 2)}
          spaceBetween={-20}
          navigation={{
            nextEl: "#rightArrow",
            prevEl: "#leftArrow",
          }}
          speed={500}
          effect="coverflow"
          rewind
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1,
            },
            555: {
              slidesPerView: 2,
            },
            789: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          className={styles.swcontainer}
        >
          {images &&
            images.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <GalleryCard key={e.id} src={e.src} />
                  <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className={styles.swiperRightArrow} id="rightArrow">
          <img src="/Gallery/arrow.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
