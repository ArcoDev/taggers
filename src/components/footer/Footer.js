import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="icon">
            <a href="#" title="Tagerss">
              <div className="imgTag"></div>
              <h2>tagerss</h2>
            </a>
            <p>Personas reales, comunicando productos reales. </p>
          </div>

          <div className="enlaces">
            <div className="anclas">
              <a>Calcula tus ingresos</a>
              <a>Cómo funciona</a>
              <a>Beneficios</a>
              <a>Recomendaciones</a>
              <a>Soy marca</a>
            </div>
            <p>2020 Tagerss. Términos y condiciones.</p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
