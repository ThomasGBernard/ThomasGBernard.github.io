import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import {
  servicesHeader,
  services,
  servicesProcess,
  servicesScopeNote,
} from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";

function StatusBadge({ status, theme }) {
  const available = status.available;
  return (
    <span
      className="service-status"
      style={{
        color: available ? theme.body : theme.text,
        backgroundColor: available ? theme.text : "transparent",
        border: `1px solid ${theme.text}`,
      }}
    >
      {status.label}
    </span>
  );
}

function ServiceCard({ service, theme }) {
  return (
    <div
      className="service-card"
      style={{
        backgroundColor: theme.compImgHighlight,
        borderLeft: `5px solid ${theme.highlight}`,
      }}
    >
      <div className="service-card-head">
        <i
          className={`${service.icon} service-icon`}
          style={{ color: theme.text }}
        ></i>
        <div className="service-card-titles">
          <h3 style={{ color: theme.text }}>{service.title}</h3>
          <p className="service-tagline" style={{ color: theme.text }}>
            {service.tagline}
          </p>
        </div>
        <StatusBadge status={service.status} theme={theme} />
      </div>

      <p className="service-text" style={{ color: theme.secondaryText }}>
        {service.problem}
      </p>

      <div className="service-columns">
        <div>
          <h4 style={{ color: theme.text }}>What you receive</h4>
          <ul style={{ color: theme.secondaryText }}>
            {service.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ color: theme.text }}>What I need from you</h4>
          <ul style={{ color: theme.secondaryText }}>
            {service.inputs.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="service-meta" style={{ color: theme.secondaryText }}>
        <strong style={{ color: theme.text }}>Typical clients: </strong>
        {service.clients}
      </p>
      <p className="service-meta" style={{ color: theme.secondaryText }}>
        <strong style={{ color: theme.text }}>Methods & tools: </strong>
        {service.methods}
      </p>
    </div>
  );
}

function Services(props) {
  const theme = props.theme;

  return (
    <div className="services-main">
      <Header theme={theme} />

      <div className="services-body-div">
        {/* ================= INTRO ================= */}
        <Fade bottom duration={1000} distance="20px">
          <h1 className="services-title" style={{ color: theme.text }}>
            {servicesHeader.title}
          </h1>
          <p
            className="services-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {servicesHeader.description}
          </p>
        </Fade>

        {/* ================= SERVICE CARDS ================= */}
        <div className="services-list">
          {services.map((service) => (
            <Fade bottom duration={1000} distance="20px" key={service.id}>
              <ServiceCard service={service} theme={theme} />
            </Fade>
          ))}
        </div>

        {/* ================= HOW I WORK ================= */}
        <Fade bottom duration={1000} distance="20px">
          <h2
            className="services-section-title"
            style={{
              color: theme.text,
              borderTop: `2px solid ${theme.highlight}`,
            }}
          >
            {servicesProcess.title}
          </h2>
          <div className="services-process">
            {servicesProcess.steps.map((step, idx) => (
              <div
                className="process-step"
                key={idx}
                style={{ backgroundColor: theme.compImgHighlight }}
              >
                <span
                  className="process-number"
                  style={{ color: theme.body, backgroundColor: theme.text }}
                >
                  {idx + 1}
                </span>
                <h4 style={{ color: theme.text }}>{step.title}</h4>
                <p style={{ color: theme.secondaryText }}>{step.text}</p>
              </div>
            ))}
          </div>
        </Fade>

        {/* ================= CALL TO ACTION ================= */}
        <Fade bottom duration={1000} distance="20px">
          <div className="services-cta">
            <h2 style={{ color: theme.text }}>{servicesHeader.ctaTitle}</h2>
            <p style={{ color: theme.secondaryText }}>
              {servicesHeader.ctaText}
            </p>
            <Link
              to="/contact"
              className="main-button services-cta-button"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
              }}
            >
              {servicesHeader.ctaButton}
            </Link>
          </div>
          <p
            className="services-scope-note"
            style={{ color: theme.secondaryText }}
          >
            {servicesScopeNote}
          </p>
        </Fade>
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Services;
