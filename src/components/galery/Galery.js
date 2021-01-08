import React, { Component } from "react";
import "./Galery.scss";
class Galery extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <h2>Personas reales recomendado productos reales. </h2>
          <div className="recYellow"></div>
        </div>
        <div className="follow">
          <div className="icon">
            <div className="imgInsta"></div>
            <h3>Síguenos en Instagram</h3>
          </div>
          <p>@tagerss</p>
        </div>
        <div className="photos">
          <div className="insta insta1"></div>
          <div className="insta insta2"></div>
          <div className="insta insta3"></div>
          <div className="insta insta4"></div>
          <div className="insta insta5"></div>
        </div>
      </>
    );
  }
}

export default Galery;
