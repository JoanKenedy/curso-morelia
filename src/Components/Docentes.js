import React from "react";
import Docente1 from "../img/doctor-2.png";
import Docente2 from "../img/doctor-1.png";
import Docente3 from "../img/doctor.png";
import "../styles/docentes.css";

const Docentes = () => {
  return (
    <div className="docentes">
      <div className="barra-docente">
        <h2>Ponentes</h2>
      </div>

      <div className="container-docentes">
        <div className="item-docente">
          <img src={Docente1} alt="" />
          <h2>Dr. Sergio Enrique Gembe</h2>
        </div>
        <div className="item-docente">
          <img src={Docente2} alt="" />
          <h2>Dr. Christofer Campos Marcial</h2>
        </div>
        <div className="item-docente">
          <img src={Docente3} alt="" />
          <h2>Dr. Christian Garrido Barbosa</h2>
        </div>
      </div>
      <div className="barra-abajo-ponente">
        <h2>Reconocimiento con validez oficial (horas crédito).</h2>
      </div>
    </div>
  );
};

export default Docentes;
