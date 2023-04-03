import style from "./EventCard.module.scss";
import useMediaQuery from "../../Hooks/useMediaQuery";

const Card = ({ info }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <div className={style.card}>
      <img
        className={style.eventImg}
        src={info.img}
        alt="event-img"
        width={isMobile ? 220 : 300}
      />
      <div className={style.desc}>
        <p className={style.title}>{info.name}</p>
        <p className={style.content}>{info.description}</p>
      </div>
    </div>
  );
};

export default Card;
