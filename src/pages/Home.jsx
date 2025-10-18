import React from "react";
import QRCode from "react-qr-code";
import profilePhoto from "../assets/mee.jpg";

export default function Home({ lang }) {
  return (
    <>
      {/* ======= Section Accueil ======= */}
      <section className="home">
        <div className="home-content">
          {/* === Section Texte === */}
          <div className="text-section">
            <h1>Meryem Ben-aammi</h1>

            {/* === À propos de moi === */}
            <div className="about-me-section">
              <div className="about-me-header">
                <div className="about-me-icon">✨</div>
                <h2 className="about-me-title">
                  {lang === "FR" ? "À Propos de Moi" : "About Me"}
                </h2>
              </div>

              <div className="about-me-content">
                <div className="about-me-card">
                  <div className="about-me-text">
                    <p className="about-me-description">
                      {lang === "FR"
                        ? "Future ingénieure d'État en Big Data & Intelligence Artificielle, passionnée par les défis technologiques et motivée à contribuer à des projets innovants. Passionnée par l'innovation technologique et les défis complexes, je m'épanouis dans l'univers du Big Data et de l'Intelligence Artificielle. Mon parcours académique et mes projets personnels témoignent de ma détermination à transformer les données en solutions intelligentes."
                        : "Future State Engineer in Big Data & Artificial Intelligence, passionate about technological challenges and eager to contribute to innovative projects. Passionate about technological innovation and complex challenges, I thrive in the world of Big Data and Artificial Intelligence. My academic journey and personal projects demonstrate my determination to transform data into intelligent solutions."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* === Objectif actuel === */}
            <h3>{lang === "FR" ? "Objectif actuel" : "Current Goal"}</h3>
            <p>
              {lang === "FR"
                ? "Recherche un stage de fin d'études (PFE) de 6 mois à partir de janvier pour développer mon expertise."
                : "Looking for a 6-month end-of-study internship starting in January to develop my expertise."}
            </p>

            {/* === Contact & QR Code === */}
            <div className="contact-qr-container">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <span>+212 604 87 21 63</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <span>meryembenaami@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌍</div>
                  <span>Rabat, Morocco</span>
                </div>
              </div>

              <div className="qr-section">
                <h4 className="qr-label">LinkedIn</h4>
                <div className="qr-code">
                  <QRCode
                    value="https://www.linkedin.com/in/meryem-ben-aammi-453611227/"
                    size={120}
                  />
                </div>
              </div>
            </div>

            {/* === Bouton CV === */}
            <div className="cv-download-section">
              <button
                className="cv-download-btn"
                onClick={() =>
                  window.open("/cv-meryem-ben-aammi.pdf", "_blank")
                }
              >
                <div className="btn-icon">📄</div>
                <span>
                  {lang === "FR"
                    ? "Télécharger mon CV"
                    : "Download my CV"}
                </span>
                <div className="btn-arrow">↓</div>
              </button>
            </div>
          </div>

          {/* === Section Photo === */}
          <div className="photo-section">
            <img
              src={profilePhoto}
              alt="Meryem Ben-aammi"
              className="profile-photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
