import React from "react";
import { useState } from "react";
import "../styles/general.css";
import Doctor from "../img/doctor.png";

const General = () => {
  const general = [
    {
      title: "el curso incluye",
      texto:
        "Primer Curso de implantologia dental patrocinado por Maco Iníciate en el mundo de la implantologia.  En la Ciudad de México 23 al 30 de Junio 2023.",
      texto2: "Curso 25% Teórico práctico preclínico 75% Clínica ",
      texto3: "Incluye ",
      texto4:
        "* Colocación de 10 implantes como colocación mínima por doctor. ",
      texto5:
        "* Material para regeneración ósea (se aplicarán diferentes técnicas de su manejo) ",
      texto6: "* Implantes post extracción",
      texto7: "* Elevación de seno maxilar",
      texto8: "* Hospedaje y alimentos",
    },
    {
      title: "Dirigido a",
      texto:
        "El curso está dirigido a odontólogos y especialistas en el área. ",
    },
    {
      title: "Instalaciones",
      texto: "Contamos con instalaciones y equipo de primer nivel",
    },
    {
      title: "Recorrido por",
      texto: "Paseo por Teotihuacán y Xochimilco.",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="general">
      <div className="barra-general">
        <p>Información General</p>
      </div>
      <div className="container-general-informacion">
        <div className="item-general">
          <img src={Doctor} alt="" />
        </div>
        <div className="item-general">
          <div className="texto-info">
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos un grupo de dentistas especializados en el área de
              periodoncia-implantología-rehabilitación. Con el objetivo de
              formar profesionales de la implantología, en un periodo de tiempo
              corto pero con resultados objetivos al final del curso.
            </p>
          </div>
          <div className="preguntas">
            <div className="wraper">
              {general.map((item, i) => (
                <div className="item-acordeon">
                  <div className="title-acordeon" onClick={() => toggle(i)}>
                    <h5>{item.title}</h5>
                    <i class="fa-solid fa-plus"></i>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    <p>{item.texto}</p>
                    <p>{item.texto2}</p>
                    <p>{item.texto3}</p>
                    <p>{item.texto4}</p>
                    <p>{item.texto5}</p>
                    <p>{item.texto6}</p>
                    <p>{item.texto7}</p>
                    <p>{item.texto8}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="registrar">
        <p>
          <a href="https://wa.me/524431462935" target="_blank">
            Regístrate ahora mismo
          </a>
        </p>
      </div>
    </div>
  );
};

export default General;
