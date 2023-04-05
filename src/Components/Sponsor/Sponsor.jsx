import styles from "./Sponsor.module.scss";
const Sponsor = () => {
  const mediaPartners = [
    {
      name: "Jugosonkho",
      img: "https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680712234/WhatsApp_Image_2023-04-05_at_9.12.23_PM_vw1pkz.webp",
    },
    {
      name: "Eastern Chronicles",
      img: "https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680712222/WhatsApp_Image_2023-04-05_at_9.12.24_PM_zr3ucd.webp",
    },
    {
      name: "Baartalipi",
      img: "https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680712212/WhatsApp_Image_2023-04-05_at_9.12.25_PM_e9mt15.webp",
    },
  ];
  // const sponsors = [1, 2, 3,4];

  return (
    <div className={styles.main}>
      <img
        className={styles.bimg}
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680701027/bg_qlfbia.webp"
        alt="background"
      />
      <img
        id={styles.fleft}
        src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680706481/Asset_3eeu2q_2_k0eub0.webp"
        alt=""
      />
      <img
        id={styles.fright}
        src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680705467/Asset_3eeu2q_3_yofvwh.webp"
        alt=""
      />
      <div className={styles.heading}>
        <h1>Sponsors</h1>
        <img src="assets/underline.svg" alt="underline" />
      </div>
      <div className={styles.sponsorContainer}>
        <div className={styles.frame}>
          <img
            id={styles.top}
            src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680705879/Asset_2qqi_9_ayebkg.webp"
            alt="top frame"
          />
          <img
            id={styles.left}
            src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680706061/Asset_2qqi_6_pcmfmq.webp"
            alt="left frame"
          />
          <img
            id={styles.bottom}
            src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680705879/Asset_2qqi_9_ayebkg.webp"
            alt="bottom frame"
          />
          <img
            id={styles.right}
            src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680705990/Asset_2qqi_7_w66nam.webp"
            alt="right frame"
          />
        </div>

        <div className={styles.sponsorList}>
          {/* {sponsors.map((sponsor) => {
            return (
              <div className={styles.card} key={sponsor}>
                <img src="assets/card2.png" alt={sponsor} />
                <p>name</p>
              </div>
            );
          })} */}
          {/* <h1>To be announced soon..........</h1> */}
        </div>
        <h1 className={styles.media}>Media Partners</h1>
        <div className={styles.sponsorList}>
          {mediaPartners.map((sponsor) => {
            return (
              <div className={styles.card} key={sponsor}>
                <img src={sponsor.img} alt={sponsor} />
              </div>
            );
          })}
        </div>
      </div>
      <img
        id={styles.frightD}
        src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680706175/Asset_3eeu2q_3_1_gstrrj.webp"
        alt=""
      />
    </div>
  );
};

export default Sponsor;
