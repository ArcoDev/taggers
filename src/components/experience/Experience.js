import React, { Component } from "react";
import "./Experience.scss";
class Experience extends Component {
  render() {
    return (
      <>
        <div className="experience">
          <h2>¿Listo para vivir la experiencia?</h2>
          <p>
            Para entrar en fila de la beta cerrada, completa el siguiente
            formulario, actualmente hay <span>más de 10k creadores</span>{" "}
            esperando.
          </p>
          <div className="form">
            <div className="file">Aqui se llenaran los camos</div>
            <div className="checkboks">
              <h3>¿Qué red social es la que más usas? Máximo 2.</h3>
              <div>aqui van los checkboks</div>
            </div>
            <button>Noticarme en cuanto pueda entrar</button>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
