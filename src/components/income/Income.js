import React, { Component } from "react";
import "./Income.scss";
class Income extends Component {
  render() {
    return (
      <>
        <div className="income">
          <h2>Calcula tus ingresos</h2>
          <p>
            <span>Tu eliges tu tarifa,</span> pero te damos una sugerencia de lo
            que las empresas están pagando para que aumentes al máximo tus
            ganancias.
          </p>
          <h4>Pago por Interacciones</h4>
          <h3>Aquí va el rango de las iteraciones</h3>
          <div className="limit">
            <h3>Esto es una estimación el limite lo pones tú. </h3>
            <button>Registrate</button>
          </div>
        </div>
      </>
    );
  }
}

export default Income;
