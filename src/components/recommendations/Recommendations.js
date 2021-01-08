import React, { Component } from "react";
import "./Recommendations.scss";
import imgRec from "../../assets/img/recommendation.svg";
class Recommendations extends Component {
  render() {
    return (
      <>
        <div className="recommendations">
          <div className="infoRec">
            <h2>Recomendaciones</h2>
            <h3>
              Contenido bajo<br></br> tus propios términos
            </h3>
            <p>
              <span>
                Lo que tú publicas tiene mucho más impacto que cualquier otro
                tipo de publicidad.
              </span>{" "}
              Tus seguidores conocerán productos y servicios que podrían mejorar
              su vida y tú ganas por esas recomendaciones.
            </p>
            <p>
              Trabaja en la red social de tú elección y escoge las categorías de
              interés que prefieras.
            </p>
          </div>
          <div className="imgRec">
            <img src={imgRec} />
          </div>
        </div>
      </>
    );
  }
}

export default Recommendations;
