import React from "react";
import { Link } from "react-router-dom";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

const heroBackground = require("../../assets/images/home/hero_background_river.jpg");

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="greet-main" id="greeting">
      <div
        className="greeting-hero"
        role="img"
        aria-label={greeting.heroBackgroundAlt}
        style={{ "--hero-bg": `url(${heroBackground})` }}
      >
        <Fade bottom duration={1000} distance="20px">
          <div className="greeting-text-div">
            <h1 className="greeting-text">{greeting.title}</h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname">{greeting.nickname}</h2>
            )}
            <p className="greeting-text-p">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <Link
                to="/services"
                className="main-button greeting-button"
                style={{
                  color: theme.text,
                  backgroundColor: "#ffffff",
                  border: "solid 1px #ffffff",
                }}
              >
                See my services
              </Link>
              <Link
                to="/contact"
                className="main-button greeting-button"
                style={{
                  color: "#ffffff",
                  backgroundColor: "transparent",
                  border: "solid 1px #ffffff",
                }}
              >
                Get in touch
              </Link>
            </div>
            <SocialMedia theme={theme} />
          </div>
        </Fade>
        {greeting.heroBackgroundCaption && (
          <span className="greeting-hero-credit">
            {greeting.heroBackgroundCaption}
          </span>
        )}
      </div>
    </div>
  );
}
