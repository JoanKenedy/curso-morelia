import React from "react";
import BarraDos from "../Components/BarraDos";
import BarraTres from "../Components/BarraTres";
import Docentes from "../Components/Docentes";

import General from "../Components/General";
import Navbar from "../Components/Navbar";
import Ponentes from "../Components/Ponentes";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BarraDos />
      <BarraTres />
      <Ponentes />
      <Docentes />

      <General />
    </div>
  );
};

export default Home;
