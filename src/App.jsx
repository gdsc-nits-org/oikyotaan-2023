import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components";

import { Error, Home, TeamPage } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
