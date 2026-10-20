import React, { Component } from "react";

export default class ExperienceImg extends Component {
  render() {
    return (
      <img
        src={require("../../assets/images/experience_mountain_web.jpg")} // Nom de votre image dans src/assets/images/
        alt="Alpine mountain landscape"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "550px", // Limite la taille maximale pour un rendu fluide
          display: "block",
          margin: "0 auto",
        }}
      />
    );
  }
}
