import { useState } from "react";
import style from "./ArtistCard.module.scss";
import useMediaQuery from "../../Hooks/useMediaQuery";

const ArtistCard = ({ info }) => {
  const [on, setOn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const visible = () => {
    setOn(true);
  };
  return (
    <div className={style.card}>
      <div className={style.container}>
        <div className={style.imgContainer} onMouseEnter={visible}>
          <img
            className={style.eventImg}
            src={info.img}
            alt="event-img"
            width={isMobile ? 220 : 300}
            style={{ opacity: `${on ? 1 : 0}` }}
          />
          <img
            className={style.overlay}
            src="https://res.cloudinary.com/dt3o8ldp9/image/upload/v1680809278/khidki_piowjq.png"
            alt="png"
          />
        </div>
      </div>
      <div className={style.desc}>
        <p className={style.title}>{info.name}</p>
        <p className={style.content}>{info.description}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
