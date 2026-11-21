import React from "react";
import { Link } from "react-router-dom";
import "./ServiceHighlights.css";
import {
  homeServices,
  serviceHighlightsHeader,
  servicesStandalone,
} from "../../portfolio";
import { Fade } from "react-reveal";

export default function ServiceHighlights(props) {
  const theme = props.theme;
  return (
    <div className="highlights-main" id="services">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="highlights-header" style={{ color: theme.text }}>
          {serviceHighlightsHeader.title}
        </h2>
        <p
          className="highlights-subheader"
          style={{ color: theme.secondaryText }}
        >
          {serviceHighlightsHeader.description}
        </p>
        <div className="highlights-flow" style={{ color: theme.text }}>
          <span className="flow-step">
            <i className="fas fa-circle-question"></i> Your question
          </span>
          <i
            className="fas fa-arrow-right flow-arrow"
            style={{ color: theme.imageHighlight }}
          ></i>
          <span className="flow-step">
            <i className="fas fa-database"></i> Data & models
          </span>
          <i
            className="fas fa-arrow-right flow-arrow"
            style={{ color: theme.imageHighlight }}
          ></i>
          <span
            className="flow-step flow-step-strong"
            style={{ backgroundColor: theme.text, color: theme.body }}
          >
            <i className="fas fa-circle-check"></i> Clear answer
          </span>
        </div>
      </Fade>

      <div className="highlights-grid">
        {homeServices.map((service) => (
          <Fade bottom duration={1000} distance="20px" key={service.id}>
            <Link
              to="/services"
              className="highlight-card"
              style={{
                backgroundColor: theme.compImgHighlight,
                borderTop: `4px solid ${theme.imageHighlight}`,
              }}
            >
              <i
                className={`${service.icon} highlight-icon`}
                style={{ color: theme.imageHighlight }}
              ></i>
              <h3 style={{ color: theme.text }}>{service.title}</h3>
              <p style={{ color: theme.secondaryText }}>{service.tagline}</p>
              <div
                className="highlight-diagnosis"
                style={{ backgroundColor: theme.body, color: theme.text }}
              >
                <span
                  className="highlight-diagnosis-label"
                  style={{ color: theme.imageHighlight }}
                >
                  The question I answer
                </span>
                {service.diagnosis}
              </div>
            </Link>
          </Fade>
        ))}
      </div>

      {servicesStandalone && (
        <Fade bottom duration={1000} distance="20px">
          <div
            className="highlights-standalone"
            style={{ backgroundColor: theme.compImgHighlight }}
          >
            <span
              className="highlights-standalone-label"
              style={{ color: theme.text }}
            >
              {servicesStandalone.title}, beyond rivers:
            </span>
            <span className="highlights-standalone-items">
              {servicesStandalone.items.map((item) => (
                <Link
                  to="/services"
                  className="highlights-standalone-item"
                  key={item.title}
                  style={{
                    color: theme.text,
                    border: `1px solid ${theme.imageHighlight}`,
                  }}
                >
                  <i
                    className={item.icon}
                    style={{ color: theme.imageHighlight }}
                  ></i>{" "}
                  {item.title}
                </Link>
              ))}
            </span>
          </div>
        </Fade>
      )}

      <div className="highlights-more">
        <Link
          to="/services"
          className="highlights-more-link"
          style={{ color: theme.text }}
        >
          See all services and how I work →
        </Link>
      </div>
    </div>
  );
}
