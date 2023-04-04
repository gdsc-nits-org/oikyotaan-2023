import style from "./Home.module.scss";
import { Landing, Sponsor } from "../../Components";

const Home = ({ setLoading }) => {
  return (
    <main className={style.home}>
      <Landing setLoading={setLoading} />
      <Sponsor />
    </main>
  );
};

export default Home;
