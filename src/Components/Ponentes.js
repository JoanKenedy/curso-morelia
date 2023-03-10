import React from "react";
import ReactPlayer from "react-player";
import "../styles/ponente.css";
import Galery from "./Galery";

const Ponentes = () => {
  return (
    <div className="ponente">
      <div className="barra-ponente">
        <h2>Testimonios</h2>
      </div>
      <div className="container-ponente">
        <div className="item-ponente">
          <ReactPlayer
            url="https://vimeo.com/795033824/ec252d2d15"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="item-ponente">
          <ReactPlayer
            url="https://vimeo.com/795306372"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="item-ponente">
          <ReactPlayer
            url="https://vimeo.com/795042397/7c57b2655c"
            width="100%"
            height="100%"
            controls
          />
        </div>

        <div className="item-ponente">
          <ReactPlayer
            url="https://vimeo.com/795322910"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
      <Galery />
    </div>
  );
};

export default Ponentes;
