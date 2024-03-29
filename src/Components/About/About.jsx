import style from "./About.module.scss";
import Fade from "../Fade/Fade";
const About = ({ aboutRef }) => {
  return (
    <div className={style.aboutUs} ref={aboutRef}>
      <img
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680700263/alpona_bwvstj.webp"
        alt="alpona"
        className={style.alpona}
      />
      <div className={style.head}>
        <h1>About Us</h1>
        <img src="/images/line1.png" alt="image1" />
      </div>
      <div className={style.about}>
        <Fade type="left">
          <div className={style.fade}>
            <img
              src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680700380/Group_467_a6bmr3.webp"
              alt="image1"
              className={style.about_image}
            />
          </div>
        </Fade>
        <div className={style.about_text_div}>
          <Fade type="bottom">
            <div className={style.about_text}>
              The Bengali New Year, or Pohela Boishakh, symbolises rejuvenation and
              renewed life. It is that time of the year when we all get to hear the sweet
              call of the cuckoo, feel the soothing sensation of the southern breeze,
              mango flowers start appearing and the heart of Bengal seems to attain a new
              vigour, brought about by the blessings of Spring.&nbsp;Oikyotaan
              &quot;musical harmony&quot; is an annual event of NIT Silchar which is
              dedicated to the frolic and cultural celebration of the Bengali New Year.
              Since it is the harvest season, people pray to Lord Ganesha and Goddess
              Laxmi for God&apos;s blessings on their lives and households. Many prayers
              are chanted on this day because people believe it will bring them peace,
              good health, long lives, and then stable lives.
              <br></br>
              <br></br>
              Oikyotaan is a cultural festival that celebrates the diversity and
              creativity of our Bengali community. It will feature music, dance, art and
              more from talented performers and artists. Oikyotaan is a common podium of
              celebration for all those whose hearts ardently love the
              &quot;Bangaliana&quot; spirit - so do join us on the 7th of April, this year
              as we welcome the new year with pomp, joy, music and dance!
              <br />
              <div />
              <a
                className={style.btn}
                href="https://drive.google.com/file/d/1lSONRyHf--VPMvo9u1aQj4NUDBnAZ-0E/view?usp=sharing"
                target="_blank"
              >
                Brochure
              </a>
            </div>
          </Fade>
          <div className={style.footer}>
            <img src="/images/Line2.png" alt="image1" className={style.line1} />
            <img src="/images/Polygon1.png" alt="image1" className={style.line2} />
            <img src="/images/Line2.png" alt="image1" className={style.line1} />
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680700575/Asset_154_2_pbvhjc.webp"
        alt="image1"
        className={style.line9}
      />
    </div>
  );
};

export default About;
