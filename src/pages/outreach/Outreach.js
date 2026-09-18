import React, { useState } from "react";
import "./Outreach.css";
import { outreachHeader, outreach, comicProject } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";

function Outreach(props) {
  const theme = props.theme;

  // Gestion de l'index de l'image actuellement ouverte (null si aucune image n'est affichée)
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const images = comicProject?.previewImages || [];

  // Navigation vers la gauche
  const handlePrev = (e) => {
    e.stopPropagation(); // Évite de fermer la modale au clic sur le bouton
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigation vers la droite
  const handleNext = (e) => {
    e.stopPropagation(); // Évite de fermer la modale au clic sur le bouton
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="outreach-main">
      <Header theme={theme} />

      <div
        className="outreach-body-div"
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
            {outreachHeader.title}
          </h1>
          <p
            style={{
              color: theme.secondaryText,
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            {outreachHeader.description}
          </p>
        </Fade>

        {/* ================= SECTION 1 : CONFÉRENCES ================= */}
        <div className="outreach-list">
          {outreach.data.map((item) => {
            return (
              <Fade bottom duration={1000} distance="20px" key={item.id}>
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
                      color: theme.highlight,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.event_date}
                  </span>
                  <h3
                    style={{
                      color: theme.text,
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <h4
                    style={{
                      color: theme.text,
                      fontWeight: "500",
                      fontSize: "1rem",
                      marginBottom: "10px",
                      fontStyle: "italic",
                    }}
                  >
                    {item.subtitle}
                  </h4>
                  <p
                    style={{
                      color: theme.secondaryText,
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </Fade>
            );
          })}
        </div>
        {/* ================= SECTION 2 : BANDE DESSINÉE ================= */}
        {comicProject && (
          <div style={{ marginTop: "60px", marginBottom: "60px" }}>
            <Fade bottom duration={1000} distance="20px">
              <h1
                style={{
                  color: theme.text,
                  marginBottom: "40px",
                  borderTop: `2px solid ${theme.highlight}`,
                  paddingTop: "80px",
                  paddingBottom: "40px",
                  textAlign: "center",
                }}
              >
                Science Communication through Arts
              </h1>
            </Fade>

            <Fade bottom duration={1000} distance="20px">
              <div
                style={{
                  backgroundColor: theme.compImgHighlight,
                  borderRadius: "8px",
                  padding: "24px",
                  borderLeft: `5px solid ${theme.highlight}`,
                }}
              >
                {/* En-tête aligné : Titre à gauche, Logo à droite */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: theme.text,
                        marginTop: 0,
                        marginBottom: "5px",
                      }}
                    >
                      {comicProject.title}
                    </h3>
                    <h4
                      style={{
                        color: theme.text,
                        fontWeight: "500",
                        fontSize: "1rem",
                        margin: 0,
                        fontStyle: "italic",
                      }}
                    >
                      {comicProject.subtitle}
                    </h4>
                  </div>

                  {/* Balise d'affichage du logo Djoune Illustration */}
                  {comicProject.artistLogo && (
                    <img
                      src={comicProject.artistLogo}
                      alt="Djoune Illustration Logo"
                      style={{
                        height: "50px",
                        maxHeight: "50px",
                        objectFit: "contain",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                </div>

                <p
                  style={{
                    color: theme.secondaryText,
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    marginBottom: "20px",
                  }}
                >
                  {comicProject.description}
                </p>

                {/* Galerie d'aperçus */}
                {images.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      overflowX: "auto",
                      paddingBottom: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    {images.map((imgSrc, idx) => (
                      <img
                        key={idx}
                        src={imgSrc}
                        alt={`Aperçu BD case ${idx + 1}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        className="comic-preview-thumbnail"
                        style={{
                          height: "150px",
                          borderRadius: "6px",
                          objectFit: "cover",
                          border: `1px solid ${theme.secondaryText}`,
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Lien externe vers le site */}
                {comicProject.artistWebsite && (
                  <a
                    href={comicProject.artistWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: theme.highlight,
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i> Discover the
                    complete comic on Djoune illustration's website →
                  </a>
                )}
              </div>
            </Fade>
          </div>
        )}
      </div>

      {/* ================= MODALE LIGHTBOX AVEC FLÈCHES ================= */}
      {currentImageIndex !== null && (
        <div
          onClick={() => setCurrentImageIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            zIndex: 10000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Bouton Gauche */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "20px",
              background: "rgba(255, 255, 255, 0.15)",
              color: "#fff",
              border: "none",
              fontSize: "2rem",
              padding: "10px 18px",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 10001,
            }}
          >
            ❮
          </button>

          {/* Affichage de l'image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "85%", maxHeight: "85%" }}
          >
            <img
              src={images[currentImageIndex]}
              alt={`BD Case ${currentImageIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "8px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                objectFit: "contain",
              }}
            />
            <span
              onClick={() => setCurrentImageIndex(null)}
              style={{
                position: "absolute",
                top: "-35px",
                right: "0px",
                color: "#ffffff",
                fontSize: "1.8rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ✕
            </span>
          </div>

          {/* Bouton Droit */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "20px",
              background: "rgba(255, 255, 255, 0.15)",
              color: "#fff",
              border: "none",
              fontSize: "2rem",
              padding: "10px 18px",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 10001,
            }}
          >
            ❯
          </button>
        </div>
      )}

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Outreach;
