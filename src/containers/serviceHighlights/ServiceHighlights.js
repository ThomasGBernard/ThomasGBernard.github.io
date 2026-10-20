import React from "react";
import { Link } from "react-router-dom";
import "./ServiceHighlights.css";
import { services, serviceHighlightsHeader } from "../../portfolio";
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
      </Fade>

      <div className="highlights-grid">
        {services.map((service) => (
          <Fade bottom duration={1000} distance="20px" key={service.id}>
            <Link
              to="/services"
              className="highlight-card"
              style={{
                backgroundColor: theme.compImgHighlight,
                borderTop: `4px solid ${theme.highlight}`,
              }}
            >
              <i
                className={`${service.icon} highlight-icon`}
                style={{ color: theme.text }}
              ></i>
              <h3 style={{ color: theme.text }}>{service.title}</h3>
              <p style={{ color: theme.secondaryText }}>{service.tagline}</p>
              <span
                className="highlight-status"
                style={{ color: theme.secondaryText }}
              >
                {service.status.label}
              </span>
            </Link>
          </Fade>
        ))}
      </div>

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
