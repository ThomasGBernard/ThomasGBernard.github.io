import React from "react";
import { Link } from "react-router-dom";
import "./SelectedWork.css";
import { selectedWork } from "../../portfolio";
import { Fade } from "react-reveal";

// Links starting with http, or pointing to static files (e.g. /oso/index.html),
// are plain <a> links; other paths are React Router pages.
function WorkLink({ item, theme }) {
  const style = { color: theme.imageHighlight };
  if (/^https?:/.test(item.link)) {
    return (
      <a
        className="work-link"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {item.linkText} ↗
      </a>
    );
  }
  if (/\.html$/.test(item.link)) {
    return (
      <a className="work-link" href={item.link} style={style}>
        {item.linkText} →
      </a>
    );
  }
  return (
    <Link className="work-link" to={item.link} style={style}>
      {item.linkText} →
    </Link>
  );
}

export default function SelectedWork(props) {
  const theme = props.theme;
  return (
    <div className="work-main" id="selected-work">
      <Fade bottom duration={1000} distance="20px">
        <h2 className="work-header" style={{ color: theme.text }}>
          {selectedWork.title}
        </h2>
        <p className="work-subheader" style={{ color: theme.secondaryText }}>
          {selectedWork.description}
        </p>
      </Fade>

      <div className="work-grid">
        {selectedWork.data.map((item) => (
          <Fade bottom duration={1000} distance="20px" key={item.id}>
            <div
              className="work-card"
              style={{ backgroundColor: theme.compImgHighlight }}
            >
              <div className="work-image-wrap">
                <img src={item.image} alt={item.imageAlt} />
              </div>
              <div className="work-body">
                <span
                  className="work-tag"
                  style={{ color: theme.secondaryText }}
                >
                  {item.tag}
                </span>
                <h3 style={{ color: theme.text }}>{item.title}</h3>
                <p style={{ color: theme.secondaryText }}>{item.text}</p>
                <WorkLink item={item} theme={theme} />
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <div className="work-more">
        <Link
          to={selectedWork.moreLink.to}
          className="work-more-link"
          style={{ color: theme.text }}
        >
          {selectedWork.moreLink.text}
        </Link>
      </div>
    </div>
  );
}
