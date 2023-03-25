import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components";
import { Error, Home, About } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <About /> */}
    </>
  );
};

export default App;
