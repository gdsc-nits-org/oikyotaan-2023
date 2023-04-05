import style from "./About.module.scss";
import Fade from "../Fade/Fade";
const About = () => {
  return (
    <div className={style.aboutUs}>
      <img src="/images/alpona.png" alt="alpona" className={style.alpona} />
      <div className={style.head}>
        <h1>About Us</h1>
        <img src="/images/line1.png" alt="image1" />
      </div>
      <div className={style.about}>
        <Fade type="left">
          <div className={style.fade}>
            <img src="/images/Group 467.png" alt="image1" className={style.about_image} />
          </div>
        </Fade>
        <div className={style.about_text_div}>
          <Fade type="bottom">
            <div className={style.about_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste quod,
              tempora nisi tenetur aliquam atque maxime necessitatibus reiciendis commodi
              doloribus odit! Labore voluptas debitis, iure tempore nemo quaerat
              inventore, iste voluptatem voluptatum nam accusantium eaque, quis explicabo
              quas qui harum a esse nesciunt repudiandae excepturi adipisci expedita ab.
              Iusto dolore debitis culpa ullam sit suscipit eum architecto omnis facere
              nisi impedit consequuntur iure, reiciendis totam, eaque sunt. Suscipit est
              maxime labore libero. Dolore, sed suscipit. Ullam placeat, corrupti
              explicabo velit nam ut tenetur fugit, ducimus libero vero enim voluptatum!
              Hic culpa animi voluptatum consequatur facilis ad reprehenderit placeat
              consectetur velit nostrum, provident rem vellibero.
              <br></br>
              <br></br>
              Dolore, sed suscipit. Ullam placeat, corrupti explicabo velit nam ut tenetur
              fugit, ducimus libero vero enim voluptatum! Hic culpa animi voluptatum
              consequatur facilis ad reprehenderit placeat consectetur velit nostrum,
              provident rem velprovident rem vellibero. Dolore, sed suscipit. Ullam
              placeat, corrupti explicabo velit nam ut tenetur fugit, ducimus libero vero
              enim voluptatum! Hic culpa animi voluptatum consequatur facilis ad
              reprehenderit placeat consectetur velit nostrum, provident rem vel.
              provident rem velprovident rem vellibero. Dolore, sed suscipit. Ullam
              placeat, corrupti explicabo velit nam ut tenetur fugit, ducimus libero vero
              enim voluptatum! Hic culpa animi voluptatum consequatur facilis ad
              reprehenderit placeat consectetur velit nostrum, provident rem vel.
            </div>
          </Fade>
          <div className={style.footer}>
            <img src="/images/Line2.png" alt="image1" className={style.line1} />
            <img src="/images/Polygon1.png" alt="image1" className={style.line2} />
            <img src="/images/Line2.png" alt="image1" className={style.line1} />
          </div>
        </div>
      </div>
      <img src="/images/Asset 154 2.png" alt="image1" className={style.line9} />
    </div>
  );
};

export default About;
