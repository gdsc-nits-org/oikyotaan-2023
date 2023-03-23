import style from "./landing.module.scss";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.Eye}>
        <img src="/assets/eye.svg" alt="eye" />
      </div>

      <div className={style.boatL}>
        <img src="/assets/boatleft.svg" alt="left_boat" />
      </div>

      <div className={style.boatR}>
        <img src="/assets/boatright.svg" alt="right_boat" />
      </div>

      <div className={style.birdL}>
        <img src="/assets/birdleft.svg" alt="left_bird" />
      </div>

      <div className={style.birdR}>
        <img src="/assets/birdright.svg" alt="right_bird" />
      </div>
    </div>
  );
};

export default Landing;
