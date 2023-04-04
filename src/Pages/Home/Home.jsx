/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from "react";
import style from "./Home.module.scss";
import { Landing, Sponsor, About } from "../../Components";
const Home = ({ setLoading }) => {
  const aboutRef = useRef(null);
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const toggle = () => {
    if (!play) {
      audioRef.current.play();
      setPlay(true);
    }
  };
  return (
    <main className={style.home} onClick={toggle}>
      <Landing aboutRef={aboutRef} setLoading={setLoading} />
      <About aboutRef={aboutRef} />
      <Sponsor />
      <audio src="/assets/intro.mp3" autoPlay ref={audioRef}></audio>
    </main>
  );
};

export default Home;
