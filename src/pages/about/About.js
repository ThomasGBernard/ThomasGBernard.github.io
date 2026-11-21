import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import "../experience/Experience.css";
import "../../containers/experienceAccordion/ExperienceAccordion.css";
import "./About.css";
import {
  about,
  experience,
  certifications,
  contactPageData,
} from "../../portfolio.js";
import { Fade } from "react-reveal";

const aboutBackground = require("../../assets/images/experience_mountain_web.jpg");
// Copy the file name into a local constant first: webpack's production build
// does not resolve an imported name used directly inside require(`...`).
const profileImagePath = contactPageData.contactSection.profile_image_path;
const profileImage = require(`../../assets/images/${profileImagePath}`);

export default function About(props) {
  const theme = props.theme;
  const work = experience.sections.flatMap((s) => s.experiences);
  return (
    <div className="experience-main">
      <Header theme={theme} />

      {/* ================= INTRO ================= */}
      <div className="basic-experience">
        <div
          className="experience-hero about-hero"
          role="img"
          aria-label={experience.heroImageAlt}
          style={{ "--experience-bg": `url(${aboutBackground})` }}
        >
          <Fade bottom duration={1000} distance="20px">
            <div className="about-hero-content">
              <img
                className="about-photo"
                src={profileImage}
                alt="Thomas Bernard"
              />
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{about.title}</h1>
                <h3 className="experience-heading-sub-text">
                  {about.subtitle}
                </h3>
                <p className="experience-header-detail-text">
                  {about.description}
                </p>
                <p className="about-languages">
                  <i className="fas fa-globe-europe"></i> {about.languagesText}
                </p>
              </div>
            </div>
          </Fade>
          {experience.heroImageCaption && (
            <span className="experience-hero-credit">
              {experience.heroImageCaption}
            </span>
          )}
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="about-section" id="experience">
        <h2 className="about-section-title" style={{ color: theme.text }}>
          {about.experienceTitle}
        </h2>
        <div className="experience-accord">
          {work.map((exp, index) => (
            <ExperienceCard
              key={exp.title + exp.duration}
              index={index}
              totalCards={work.length}
              experience={exp}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="about-section" id="education">
        <Educations theme={theme} title={about.educationTitle} />
        {certifications.certifications.length > 0 && (
          <Certifications theme={theme} />
        )}
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
