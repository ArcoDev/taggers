import React from "react";
import "./FormCreator.scss";
//componente checkbos de la libreria de antd
import { Checkbox, Row, Col } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
function FormCreator() {
  return (
    <div className="container">
      <div className="info">
        <div className="content">
          <div className="title">
            <div className="icon-tag"></div>
            <h2>tagerss</h2>
          </div>
          <p>
            Estamos creando la mejor herramienta para creadores e influencers
            para que ganen más dinero!
          </p>
          <h4>Registrate para ser de los primero en entrar en la beta.</h4>
          <div className="formulario">
            <form></form>
          </div>

          <div className="redSocial">
            <h4>¿Qué red social es la que más usas? Máximo 2.</h4>
            <Checkbox.Group style={{ width: "80%" }} onChange={onChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="Tiktok" className="txtRed">
                    Tiktok
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Youtube" className="txtRed">
                    Youtube
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Twitch" className="txtRed">
                    Twitch
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Facebook" className="txtRed">
                    Facebook
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Twitter" className="txtRed">
                    Twitter
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Snapchat" className="txtRed">
                    Snapchat
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Instagram" className="txtRed">
                    Instagram
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <button className="btnTag">Notificarme en cuanto pueda entrar</button>
          <p className="footer">
            2020 Tagerss. Personas reales, comunicando productos reales.
          </p>
        </div>
      </div>
      <div className="fondo"></div>
    </div>
  );
}

export default FormCreator;
