import style from "./Home.module.scss";
import Landing from "../../Components/Landing/Landing";

const Home = () => {
  return (
    <main className={style.home}>
      <Landing />
    </main>
  );
};

export default Home;
