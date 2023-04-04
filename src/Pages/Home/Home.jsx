import { useRef } from "react";
import style from "./Home.module.scss";
import { Landing, Sponsor } from "../../Components";
import About from "../../Components/About/About";
const Home = () => {
  const aboutRef = useRef(null);
  return (
    <main className={style.home}>
      <Landing aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Sponsor />
    </main>
  );
};

export default Home;
