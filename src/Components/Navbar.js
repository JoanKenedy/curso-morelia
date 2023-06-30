import React from "react";
import Logo from "../img/logo-header.png";
import Portada from "../img/curso-brasil.jpg";
import PortadaMovil from "../img/curso-movil.jpg";
import Face from "../img/facebook.png";
import Insta from "../img/instagram.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <img src={Logo} alt="" className="logo" />
        <div className="redes-header">
          <a
            href="https://www.facebook.com/profile.php?id=100086381978690"
            target="_blank"
          >
            <img src={Face} />
          </a>
          <a
            href="https://www.instagram.com/formacion_en_implantologia/"
            target="_blank"
          >
            <img src={Insta} />
          </a>
        </div>
      </header>
      <div className="barraUno">
        <p>¡Vive esta experiencia con nosotros!</p>
      </div>
      <div className="barraText">
        <p>Cupo Límitado</p>
      </div>
      <div className="hero">
        <img src={Portada} alt="" className="imgPortada" />
        <img src={PortadaMovil} alt="" className="imgPortadaMovil" />
      </div>
    </>
  );
};

export default Navbar;
