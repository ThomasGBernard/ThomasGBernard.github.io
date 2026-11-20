import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { footerData } from "../../portfolio.js";

export default function Footer(props) {
  const theme = props.theme;
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer-div"
      style={{ backgroundColor: theme.dark || theme.text, color: "#ffffff" }}
    >
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">{footerData.name}</p>
          <p className="footer-tagline">{footerData.tagline}</p>
          <p className="footer-location">
            <i className="fas fa-map-marker-alt"></i> {footerData.location}
          </p>
        </div>
        <nav className="footer-right" aria-label="Footer">
          {footerData.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.icon && <i className={link.icon}></i>} {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className="footer-link">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
      <p className="footer-credit">© {year} Thomas Bernard</p>
    </footer>
  );
}
