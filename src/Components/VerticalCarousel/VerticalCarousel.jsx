/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/scss/pagination";
import Card from "../EventCard/EventCard";
import data from "../../assets/events.json";

import style from "./VerticalCarousel.module.scss";

const VerticalCarousel = () => {
  return (
    <Swiper
      direction="vertical"
      mousewheel
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className={style.swiper}
    >
      {data.map((e) => {
        return (
          <SwiperSlide key={e.id}>
            <Card info={e} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default VerticalCarousel;
