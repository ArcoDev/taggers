import React, { Component } from "react";
import "./Header.scss";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="navegation">
          <div className="icon">
            <a href="#">
              <div className="iconTag"></div>
              <h2>tagerss</h2>
            </a>
          </div>
          <div className="enlaces">
            <a>Calcula tus ingresos</a>
            <a>Cómo funciona</a>
            <a>Beneficios</a>
            <a>Recomendaciones</a>
            <a>Soy marca</a>
          </div>
          <div className="lan-btn">
            <p>ES EN</p>
            <button>Registrarme</button>
          </div>
        </div>

        <div className="texto">
          <h2>Que tus redes sociales trabajen para tí </h2>
          <p>
            Clientes ilimitados a tú elección para que tu ingreso no pare de
            aumentar, entra desde 500 seguidores.
          </p>
          <button>¡Estoy Listo!</button>
        </div>
      </div>
    );
  }
}

export default Header;
