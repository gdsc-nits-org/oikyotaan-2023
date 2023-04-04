import { CiLocationOn } from "react-icons/ci";
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style["footer-container"]}>
      <div className={style.Footer}>
        <div className={style.footerupper}>
          <div className={style.footerupperleft}>
            <img src="/assets/logo_txt.png" alt="gdsc_logo" />
          </div>
          <div className={style.footeruppermiddle}>
            <img src="/images/oikyotan.svg" alt="oikyotaan_logo" />
          </div>
          <div className={style.footerupperright}>
            <img src="/assets/nits_logo.png" alt="nits_logo" />
          </div>
        </div>

        <div className={style.footermiddle}>
          <div className={style.footermiddleleft}>
            <div className={style.location}>
              <CiLocationOn className={style.locationlogo} />
              <p> NIT Silchar, Assam, India 788010 </p>
            </div>
            <div className={style.phoneno}>
              <FiPhone className={style.phonenologo} />
              <p> 03842-228479 </p>
            </div>
          </div>
          <div className={style.footermiddleright}>
            <a className={style.facebook} href="http">
              <FiFacebook className={style.facebooklogo} />
              <p> Facebook </p>
            </a>
            <a className={style.instagram} href="http">
              <FiInstagram className={style.instagramlogo} />
              <p> Instagram </p>
            </a>
          </div>
        </div>
      </div>
      <div className={style.footerlower}>
        <p>All Rights Reserved ©Oikyotaan, NIT Silchar</p>
      </div>
    </div>
  );
};

export default Footer;
