import { useRef } from "react";
import style from "./Home.module.scss";
import { Landing, Sponsor, About } from "../../Components";

const Home = ({ setLoading }) => {
  const aboutRef = useRef(null);
  return (
    <main className={style.home}>
      <Landing aboutRef={aboutRef} setLoading={setLoading} />
      <About aboutRef={aboutRef} />
      <Sponsor />
    </main>
  );
};

export default Home;
