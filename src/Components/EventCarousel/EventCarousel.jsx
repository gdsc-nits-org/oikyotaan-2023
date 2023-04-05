/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/scss/pagination";
import Card from "../EventCard/EventCard";
import data from "../../assets/events.json";

import "./EventCarousel.scss";

const VerticalCarousel = () => {
  return (
    <Swiper
      direction="horizontal"
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
            <Card info={e} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default VerticalCarousel;
