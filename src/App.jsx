import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components";

import { Error, Home, Gallery } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
