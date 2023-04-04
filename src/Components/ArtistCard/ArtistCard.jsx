import style from "./ArtistCard.module.scss";
import useMediaQuery from "../../Hooks/useMediaQuery";

const ArtistCard = ({ info }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <div className={style.card}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img
            className={style.eventImg}
            src={info.img}
            alt="event-img"
            width={isMobile ? 220 : 300}
          />
          <img className={style.overlay} src="/Gallery/khidki.png" alt="png" />
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
