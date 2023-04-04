import styles from "./Sponsor.module.scss";
const Sponsor = () => {
  // const mediaPartners = [1,2,3,4,5,6,7,8,9]
  // const sponsors = [1, 2, 3,4];

  return (
    <div className={styles.main}>
      <img id={styles.fleft} src="assets/Flowerleft.svg" alt="" />
      <img id={styles.fright} src="assets/Flowerright.svg" alt="" />
      <div className={styles.heading}>
        <h1>Sponsors</h1>
        <img src="assets/underline.svg" alt="underline" />
      </div>
      <div className={styles.sponsorContainer}>
        <div className={styles.frame}>
          <img id={styles.top} src="assets/Top.svg" alt="top frame" />
          <img id={styles.left} src="assets/Left.svg" alt="left frame" />
          <img id={styles.bottom} src="assets/Bottom.svg" alt="bottom frame" />
          <img id={styles.right} src="assets/Right.svg" alt="right frame" />
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
          <h1>To be announced soon..........</h1>
        </div>
        {/* <h1 className={styles.media}>Media Partners</h1>
        <div className={styles.sponsorList}>
          {mediaPartners.map((sponsor) => {
            return (
              <div className={styles.card} key={sponsor}>
                <img src="assets/card2.png" alt={sponsor} />
                <p>name</p>
              </div>
            );
          })}
        </div> */}
      </div>
      <img id={styles.frightD} src="assets/Flowerright_down.svg" alt="" />
    </div>
  );
};

export default Sponsor;
