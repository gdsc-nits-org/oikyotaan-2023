import style from "./Home.module.scss";
import { Landing, Sponsor } from "../../Components";

const Home = () => {
  return (
    <main className={style.home}>
      <Landing />
      <Sponsor />
    </main>
  );
};

export default Home;
