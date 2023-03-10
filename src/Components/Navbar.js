import React from "react";
import Logo from "../img/logo-header.png";
import Portada from "../img/portada-new.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <img src={Logo} alt="" />
      </header>
      <div className="barraUno">
        <p>
          Del 23 al 30 de Junio del 2023 en la Cdmx y del 22 al 28 de Julio en
          Reynosa Tamaulipas
        </p>
      </div>
      <div className="barraText">
        <p>Cupo Límitado</p>
      </div>
      <div className="hero">
        <img src={Portada} alt="" />
      </div>
    </>
  );
};

export default Navbar;
