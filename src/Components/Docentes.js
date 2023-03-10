import React from "react";
import Docente1 from "../img/ponente-1.jpeg";
import Docente2 from "../img/ponente-2.jpeg";
import Docente3 from "../img/ponente-3.jpeg";
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
        </div>
        <div className="item-docente">
          <img src={Docente2} alt="" />
        </div>
        <div className="item-docente">
          <img src={Docente3} alt="" />
        </div>
      </div>
      <div className="barra-abajo-ponente">
        <h2>Reconocimiento con validez oficial (horas crédito).</h2>
      </div>
    </div>
  );
};

export default Docentes;
