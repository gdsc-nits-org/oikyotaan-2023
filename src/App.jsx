import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./Components";

import { Error, Home, Gallery, TeamPage } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
