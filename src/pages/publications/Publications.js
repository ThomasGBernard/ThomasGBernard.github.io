import React from "react";
import "./Publications.css";
import { publicationsHeader, publications } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { OutreachContent } from "../outreach/Outreach";

function Publications(props) {
  const theme = props.theme;

  return (
    <div className="publications-main">
      {/* Le Header reste strictement en dehors de tout wrapper d'animation */}
      <Header theme={theme} />

      <div
        className="publications-body-div"
        style={{ padding: "30px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <Fade bottom duration={1000} distance="20px">
          <h1
            style={{
              color: theme.text,
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {publicationsHeader.title}
          </h1>
          <p
            style={{
              color: theme.secondaryText,
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            {publicationsHeader.description}
          </p>
          {publicationsHeader.scholarLink && (
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <a
                href={publicationsHeader.scholarLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: theme.text,
                  color: theme.body,
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i className="fas fa-graduation-cap"></i> View Google Scholar
                Profile
              </a>
            </div>
          )}
        </Fade>

        <h2
          className="pub-section-title"
          style={{ color: theme.text, marginTop: "20px", paddingTop: 0 }}
        >
          Peer-reviewed publications
        </h2>
        <div className="publications-list">
          {publications.data.map((pub) => {
            return (
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
            );
          })}
        </div>

        <OutreachContent theme={theme} />
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Publications;
