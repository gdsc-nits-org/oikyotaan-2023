import { CiLocationOn } from "react-icons/ci";
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={style.Footer}>
        <div className={style.footerupper}>
          <div className={style.footerupperleft}>
            <img src="/assets/footer_gdsc_logo.png" alt="gdsc_logo" />
          </div>
          <div className={style.footeruppermiddle}>
            <img src="/assets/oikyotaan_logo.png" alt="oikyotaan_logo" />
          </div>
          <div className={style.footerupperright}>
            <img src="/assets/nits_logo.png" alt="nits_logo" />
          </div>
        </div>

        <div className={style.footermiddle}>
          <div className={style.footermiddleleft}>
            <div className={style.location}>
              <CiLocationOn className={style.locationlogo} />
              <div> NIT Silchar, Assam, India 788010 </div>
            </div>
            <div className={style.phoneno}>
              <FiPhone className={style.phonenologo} />
              <div> 03842-228479 </div>
            </div>
          </div>
          <div className={style.footermiddleright}>
            <div className={style.facebook}>
              <FiFacebook className={style.facebooklogo} />
              <div> Facebook </div>
            </div>
            <div className={style.instagram}>
              <FiInstagram className={style.instagramlogo} />
              <div> Instagram </div>
            </div>
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
