/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/scss/pagination";
import styles from "./Artist.module.scss";
import { ArtistCard } from "../../Components";
import data from "../../assets/artist.json";
const Artist = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bimg} src="/Gallery/bg.png" alt="background" />
      <img className={styles.bimgLeft} alt="flower" src="/Gallery/flowers.png" />
      <img className={styles.bimgRight} alt="flower" src="/Gallery/flowers.png" />
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
          direction="vertical"
          mousewheel
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="myswiper"
        >
          {data.map((e) => {
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
