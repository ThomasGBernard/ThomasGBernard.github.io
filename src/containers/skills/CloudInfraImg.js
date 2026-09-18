import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        src={require("../../assets/images/Loire.JPG")}
        alt="Geospatial AI & 3D Processing"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10%",
          maxWidth:
            "1000px" /* Ajustez pour éviter que l'image ne soit trop grande */,
          display: "block",
          marginTop: "50px",
          border: "1px solid black",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        }}
      />
    );
  }
}
