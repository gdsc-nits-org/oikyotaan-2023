import { useSwiperSlide } from "swiper/react";
import styles from "./GalleryCard.module.scss";
const GalleryCard = ({ src }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={
        swiperSlide.isActive
          ? `${styles.container} ${styles.active}`
          : `${styles.container}`
      }
    >
      <img src={src} alt="card" loading="lazy" />
    </div>
  );
};

export default GalleryCard;
