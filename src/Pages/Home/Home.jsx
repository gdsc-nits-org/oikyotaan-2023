import style from "./Home.module.scss";
import { Landing, Sponsor } from "../../Components";
import About from "../../Components/About/About";
const Home = () => {
  return (
    <main className={style.home}>
      <Landing />
      <About />
      <Sponsor />
    </main>
  );
};

export default Home;
