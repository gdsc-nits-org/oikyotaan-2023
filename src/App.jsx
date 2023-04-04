import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar, Footer } from "./Components";
import styles from "./App.module.scss";
import { Error, Home, Gallery, Events } from "./Pages";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />
      {loading && (
        <div className={styles.loader}>
          <img className={styles.circle} src="/assets/loader-circle.png" alt="loader" />
          <img className={styles.logo} src="/assets/logo.png" alt="logo" />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home setLoading={setLoading} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
