import style from "./About.module.scss";
import durgamaa from "../../../public/assets/durgamaa.png";
import alpona from "../../../public/assets/alpona.png";
import line1 from "../../../public/assets/line1.png";
import Line2 from "../../../public/assets/Line2.png";
import Polygon1 from "../../../public/assets/Polygon1.png";
const About = () => {
  return (
    <div className="aboutUs">
      <img src={alpona} alt="" className={style.alpona} />
      <div className={style.head}>
        <h3 className={style.about_heading}>ABOUT US</h3>
        <img src={line1} alt="image1" className={style.about_imag} />
      </div>
      <div className={style.about}>
        <div className={style.fade}>
          <img src={durgamaa} alt="image1" className={style.about_image} id={style.p3} />
        </div>
        <div className={style.about_text_div}>
          <div className={style.about_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste quod,
            tempora nisi tenetur aliquam atque maxime necessitatibus reiciendis commodi
            doloribus odit! Labore voluptas debitis, iure tempore nemo quaerat inventore,
            iste voluptatem voluptatum nam accusantium eaque, quis explicabo quas qui
            harum a esse nesciunt repudiandae excepturi adipisci expedita ab. Iusto dolore
            debitis culpa ullam sit suscipit eum architecto omnis facere nisi impedit
            consequuntur iure, reiciendis totam, eaque sunt. Suscipit est maxime labore
            libero. Dolore, sed suscipit. Ullam placeat, corrupti explicabo velit nam ut
            tenetur fugit, ducimus libero vero enim voluptatum! Hic culpa animi voluptatum
            consequatur facilis ad reprehenderit placeat consectetur velit nostrum,
            provident rem vel? In voluptas, ipsum voluptate, neque nihil quo fugiat sunt
            explicabo similique unde dicta autem deserunt consectetur. Quidem ducimus enim
            id dolorem? Architecto eum autem porro, eaque, cumque, quam officiis sit ipsum
            aspernatur voluptatum est debitis quos.
          </div>
          <div className={style.footer}>
            <img src={Line2} alt="image1" className={style.line1} />
            <img src={Polygon1} alt="image1" className={style.line2} />
            <img src={Line2} alt="image1" className={style.line1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
