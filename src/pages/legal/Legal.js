import React from "react";
import "./Legal.css";
import { legalPages } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

// Single page holding both the Terms of use and the Privacy notice
export default function Legal(props) {
  const theme = props.theme;
  const parts = [
    { id: "terms", ...legalPages.terms },
    { id: "privacy", ...legalPages.privacy },
  ];
  return (
    <div className="legal-main">
      <Header theme={theme} />
      <div className="legal-body">
        <h1 className="legal-title" style={{ color: theme.text }}>
          {legalPages.title}
        </h1>
        <p className="legal-updated" style={{ color: theme.secondaryText }}>
          Last updated: {legalPages.updated}
        </p>
        {parts.map((part) => (
          <section className="legal-part" id={part.id} key={part.id}>
            <h2
              className="legal-part-title"
              style={{
                color: theme.text,
                borderTop: `2px solid ${theme.highlight}`,
              }}
            >
              {part.title}
            </h2>
            {part.sections.map((section, i) => (
              <div className="legal-section" key={i}>
                <h3 style={{ color: theme.text }}>{section.heading}</h3>
                <p style={{ color: theme.secondaryText }}>{section.text}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
