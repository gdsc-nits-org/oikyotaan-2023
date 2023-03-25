import style from "./Home.module.scss";
import { Landing } from "../../Components";

const Home = () => {
  return (
    <main className={style.home}>
      <Landing />
    </main>
  );
};

export default Home;
