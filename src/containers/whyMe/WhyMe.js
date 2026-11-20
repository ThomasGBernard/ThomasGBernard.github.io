import React from "react";
import "./WhyMe.css";
import { whyMe } from "../../portfolio";
import { Fade } from "react-reveal";

export default function WhyMe(props) {
  const theme = props.theme;
  return (
    <div className="whyme-main" id="why-me">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="whyme-header" style={{ color: theme.text }}>
          {whyMe.title}
        </h2>
        <p className="whyme-subheader" style={{ color: theme.secondaryText }}>
          {whyMe.description}
        </p>
        <div className="whyme-grid">
          {whyMe.stats.map((stat, i) => (
            <div
              className="whyme-stat"
              key={i}
              style={{ borderLeft: `4px solid ${theme.imageHighlight}` }}
            >
              <span
                className="whyme-value"
                style={{ color: theme.imageHighlight }}
              >
                {stat.value}
              </span>
              <span
                className="whyme-label"
                style={{ color: theme.secondaryText }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p className="whyme-credentials" style={{ color: theme.text }}>
          {whyMe.credentials}
        </p>
      </Fade>
    </div>
  );
}
