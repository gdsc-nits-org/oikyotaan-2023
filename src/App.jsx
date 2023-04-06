import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Navbar, Footer } from "./Components";
import styles from "./App.module.scss";

import { Error, Home, Gallery, Events, Artist } from "./Pages";
const TeamPage = lazy(() => import("./Pages/TeamPage/Team"));

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />
      {loading && (
        <div className={styles.loader}>
          <img
            className={styles.circle}
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680702361/newloader-circle_egrpxx.webp"
            alt="loader"
          />
          <img
            className={styles.logo}
            src="https://res.cloudinary.com/dc1n0ikgk/image/upload/v1680704235/logo-1_diqzjb.webp"
            alt="logo"
          />
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} />} />
          <Route path="/gallery" element={<Gallery setLoading={setLoading} />} />
          <Route path="/events" element={<Events setLoading={setLoading} />} />
          <Route path="/artist" element={<Artist setLoading={setLoading} />} />
          <Route path="/team" element={<TeamPage setLoading={setLoading} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
