import React, { Component } from "react";
import "./People.scss";
class People extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="people">
            <div className="imgPeople"></div>
          </div>
          <div className="info">
            <div className="brand">
              <div className="imgBrand"></div>
              <h2>+20k</h2>
              <p>Marcas / Empresas</p>
            </div>
            <div className="influencer">
              <div className="imgInf"></div>
              <h2>+10k</h2>
              <p>Creador en espera</p>
            </div>
            <div className="opportunity">
              <div className="imgOp"></div>
              <h2>+5k</h2>
              <p>Oportunidad para ti</p>
            </div>
          </div>
          <div className="text">
            <p>
              Imagínate finalmente tener la estabilidad en tu vida donde ya no
              te preocupes de dónde vendrá tu próximo cliente
            </p>
            <div className="rect"></div>
          </div>
        </div>
      </>
    );
  }
}

export default People;
