/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import images from "./images";
import "./Gallery.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Gallery.module.scss";
import { GalleryCard } from "../../Components/index";
const Gallery = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bimg} src="/Gallery/bg.png" alt="background" />
      <img className={styles.bimgLeft} alt="flower" src="/Gallery/flowers.png" />
      <img className={styles.bimgRight} alt="flower" src="/Gallery/flowers.png" />
      <div className={styles.text}>
        <div className={styles.design}>
          <img src="/Gallery/design.png" alt="design" />
        </div>
        <p className={styles.tt}>Gallery</p>
        <div className={styles.design}>
          <img src="/Gallery/design.png" alt="design" />
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
