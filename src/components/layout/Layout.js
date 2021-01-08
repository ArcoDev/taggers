import React from "react";
import "./Layout.scss";

function Layout(props) {
  return (
    <>
      <div className="layout">
        <div className="infoLayaout">
          <h2>{props.title}</h2>
          <p>{props.txt1}</p>
          <p>{props.txt2}</p>
          <button>{props.txtBtn}</button>
        </div>
        <div className="imgLayaout"></div>
      </div>
    </>
  );
}

export default Layout;
