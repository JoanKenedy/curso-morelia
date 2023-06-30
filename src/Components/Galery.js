import React from "react";
import Foto1 from "../img/foto-5.jpg";
import Foto2 from "../img/foto-1.jpg";
import Foto3 from "../img/foto-3.jpg";
import Foto4 from "../img/foto-7.jpg";
import Foto5 from "../img/foto-2.webp";
import Foto6 from "../img/foto-6.jpg";
import "../styles/galery.css";
const Galery = () => {
  return (
    <div className="galery">
      <h2>Lugares que conoceras en Brasil</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={Foto1} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto2} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto3} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto4} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto5} alt="" />
        </div>
        <div className="item-galery">
          <img src={Foto6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
