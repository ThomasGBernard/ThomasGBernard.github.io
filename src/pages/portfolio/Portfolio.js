import React from "react";
import "../publications/Publications.css";
import "./Portfolio.css";
import {
  portfolioHeader,
  toolboxProjects,
  publications,
  publicationsHeader,
} from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { OutreachContent } from "../outreach/Outreach";

function ProjectCard({ project, theme }) {
  return (
    <article
      className="project-case-card"
      style={{
        backgroundColor: theme.compImgHighlight,
        borderLeft: `5px solid ${theme.highlight}`,
      }}
    >
      <a
        className="project-case-image"
        href={project.link}
        aria-label={`${project.linkText}: ${project.title}`}
      >
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </a>
      <div className="project-case-body">
        <span
          className="project-case-context"
          style={{ color: theme.imageHighlight || theme.text }}
        >
          {project.context}
        </span>
        <h3 style={{ color: theme.text }}>{project.title}</h3>
        <p
          className="project-case-summary"
          style={{ color: theme.secondaryText }}
        >
          {project.summary}
        </p>

        {project.figures && project.figures.length > 0 && (
          <dl className="project-case-figures">
            {project.figures.map((f) => (
              <div key={f.label}>
                <dt style={{ color: theme.text }}>{f.value}</dt>
                <dd style={{ color: theme.secondaryText }}>{f.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.methods && project.methods.length > 0 && (
          <ul className="project-case-methods" aria-label="Methods">
            {project.methods.map((m) => (
              <li
                key={m}
                style={{
                  color: theme.text,
                  border: `1px solid ${theme.secondaryText}`,
                }}
              >
                {m}
              </li>
            ))}
          </ul>
        )}

        <a
          className="project-case-link"
          href={project.link}
          style={{ backgroundColor: theme.text, color: theme.body }}
        >
          {project.linkText}
        </a>
      </div>
    </article>
  );
}

function Portfolio(props) {
  const theme = props.theme;

  return (
    <div className="publications-main">
      <Header theme={theme} />

      <div className="publications-body-div portfolio-body-div">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="portfolio-title" style={{ color: theme.text }}>
            {portfolioHeader.title}
          </h1>
          <p className="portfolio-intro" style={{ color: theme.secondaryText }}>
            {portfolioHeader.description}
          </p>
          <nav className="portfolio-jump" aria-label="Sections of this page">
            {[
              ["#projects", "Projects"],
              ["#research", "Research"],
              ["#outreach", "Outreach"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{ color: theme.text, borderColor: theme.text }}
              >
                {label}
              </a>
            ))}
          </nav>
        </Fade>

        {/* ================= PROJECTS (toolbox case studies) ================= */}
        <section id="projects" className="portfolio-section">
          <Fade bottom duration={1000} distance="20px">
            <h2
              className="pub-section-title"
              style={{
                color: theme.text,
                borderTop: `2px solid ${theme.highlight}`,
              }}
            >
              {toolboxProjects.title}
            </h2>
            <p
              className="portfolio-section-intro"
              style={{ color: theme.secondaryText }}
            >
              {toolboxProjects.description}
            </p>
          </Fade>
          <div className="project-case-list">
            {toolboxProjects.data.map((project) => (
              <Fade bottom duration={1000} distance="20px" key={project.id}>
                <ProjectCard project={project} theme={theme} />
              </Fade>
            ))}
          </div>
        </section>

        {/* ================= RESEARCH (peer-reviewed publications) ================= */}
        <section id="research" className="portfolio-section">
          <Fade bottom duration={1000} distance="20px">
            <h2
              className="pub-section-title"
              style={{
                color: theme.text,
                borderTop: `2px solid ${theme.highlight}`,
              }}
            >
              Research
            </h2>
            <p
              className="portfolio-section-intro"
              style={{ color: theme.secondaryText }}
            >
              Peer-reviewed publications in fluvial morphodynamics, 3D lidar
              processing and natural hazards.
            </p>
            {publicationsHeader.scholarLink && (
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <a
                  href={publicationsHeader.scholarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-scholar"
                  style={{ backgroundColor: theme.text, color: theme.body }}
                >
                  <i className="fas fa-graduation-cap"></i> View Google Scholar
                  Profile
                </a>
              </div>
            )}
          </Fade>

          <div className="publications-list">
            {publications.data.map((pub) => (
              <Fade bottom duration={1000} distance="20px" key={pub.id}>
                <div
                  style={{
                    backgroundColor: theme.compImgHighlight,
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "20px",
                    borderLeft: `5px solid ${theme.highlight}`,
                  }}
                >
                  <span
                    style={{
                      color: theme.imageHighlight || theme.text,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    {pub.createdAt}
                  </span>
                  <h3
                    style={{
                      color: theme.text,
                      marginTop: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    {pub.name}
                  </h3>
                  <p
                    style={{
                      color: theme.secondaryText,
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {pub.description}
                  </p>
                  {pub.url && pub.url !== "#" && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: theme.imageHighlight || theme.text,
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Read Paper →
                    </a>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* ================= OUTREACH (conferences + comic) ================= */}
        <OutreachContent theme={theme} />
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Portfolio;
