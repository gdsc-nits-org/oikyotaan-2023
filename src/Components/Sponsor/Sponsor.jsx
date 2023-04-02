import React from "react";
import style from "./sponsor.module.scss";
const Sponsor = () => {
  return (
    <div className={style.main}>
      <img className={style.monument} src="../../../public/assets/monument.svg" alt="" />
      <div className={style.LeftBorder}>
        <img src="../../../public/assets/Left.svg" alt="" />
      </div>
      <div className={style.RightBorder}>
        <img src="../../../public/assets/Right.svg" alt="" />
      </div>
      <img
        className={style.FlowerLeft}
        src="../../../public/assets/Flowerleft.svg"
        alt=""
      />
      <img
        className={style.FlowerRight}
        src="../../../public/assets/Flowerright.svg"
        alt=""
      />
      <div className={style.heading}>
        <img src="../../../public/assets/Sponsors.svg" alt="" />
      </div>
      <div className={style.underline}>
        <img src="../../../public/assets/unerdline.svg" alt="" />
      </div>
      <div className={style.TopBorder}>
        <img src="../../../public/assets/Top.svg" alt="" />
      </div>

      <div className={style.sponsor} id={style.first}>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
      <div className={style.name} id={style.first_name}>
        <div className={style.item_name}>Name</div>
        <div className={style.item_name}>Name</div>
        <div className={style.item_name}>Name</div>
      </div>
      <div className={style.sponsor} id={style.second}>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
      <div className={style.name} id={style.second_name}>
        <div className={style.item_name}>Name</div>
        <div className={style.item_name}>Name</div>
        <div className={style.item_name}>Name</div>
      </div>
      <div className={style.media_headline}>
        <img src="../../../public/assets/Media Partners.svg" alt="" />
      </div>
      <div className={style.sponsor} id={style.third}>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
      <div className={style.name} id={style.third_name}>
        <div className={style.item_name}>Name</div>
        <div className={style.item_name}>Name</div>
        <div className={style.item_name}>Name</div>
      </div>
      <div className={style.BottomBorder}>
        <img src="../../../public/assets/Top.svg" alt="" />
      </div>
    </div>
  );
};

export default Sponsor;
