import React from "react";
import QRCode from "react-qr-code";
import profilePhoto from "../assets/mee.jpg";

export default function Home({ lang }) {
  // Fonction pour télécharger le CV selon la langue
  const handleDownloadCV = () => {
    const cvFilename = lang === "FR" 
      ? "/cv-meryem-ben-aammi.pdf" 
      : "/CV_MERYEM_BEN-AAMMI (version ang ).pdf";
    
    window.open(cvFilename, "_blank");
  };

  return (
    <>
      {/* ======= Section Accueil ======= */}
      <section className="home">
        <div className="home-content">
          {/* === Section Texte === */}
          <div className="text-section">
            <h1>Meryem Ben-aammi</h1>

            {/* === À propos de moi - Version Concise === */}
            <div className="about-me-section">
              <div className="about-me-header">
                <div className="about-me-icon">✨</div>
                <h2 className="about-me-title">
                  {lang === "FR" ? "Qui suis-je ?" : "Who am I?"}
                </h2>
              </div>

              <div className="about-me-content">
                <div className="about-me-card">
                  <div className="about-me-text">
                    <p className="about-me-description">
                      {lang === "FR"
                        ? "Je suis Meryem Ben-aammi. Passionnée par la technologie depuis toujours, j'aime comprendre les mécanismes derrière chaque innovation. Curieuse de nature, je ne me contente pas de savoir 'comment' ça marche, mais surtout 'pourquoi' ça marche. Résoudre des problèmes complexes est pour moi une véritable source de motivation."
                        : "I am Meryem Ben-aammi. Passionate about technology since forever, I love understanding the mechanisms behind every innovation. Naturally curious, I'm not satisfied with just knowing 'how' it works, but especially 'why' it works. Solving complex problems is a real source of motivation for me."}
                    </p>

                    <p className="about-me-description">
                      {lang === "FR"
                        ? "Étudiante en génie informatique, spécialisée Big Data et Intelligence Artificielle. Je me forme aux technologies qui transforment notre monde."
                        : "Computer engineering student, specializing in Big Data and Artificial Intelligence. I'm training in technologies that transform our world."}
                    </p>
                    
                    <div className="passion-highlights">
                      <div className="passion-item">
                        <span className="passion-emoji">❤️</span>
                        <span className="passion-text">
                          {lang === "FR" 
                            ? "J'aime : Résoudre des problèmes & créer des solutions" 
                            : "I love: Solving problems & creating solutions"}
                        </span>
                      </div>
                      <div className="passion-item">
                        <span className="passion-emoji">🚀</span>
                        <span className="passion-text">
                          {lang === "FR" 
                            ? "Ma passion : Data Science & Intelligence Artificielle" 
                            : "My passion: Data Science & Artificial Intelligence"}
                        </span>
                      </div>
                      <div className="passion-item">
                        <span className="passion-emoji">🎯</span>
                        <span className="passion-text">
                          {lang === "FR" 
                            ? "Objectif : Développer des solutions IA innovantes" 
                            : "Goal: Develop innovative AI solutions"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === Objectif actuel === */}
            <div className="current-goal-section">
              <h3>
                <span className="goal-icon">🎯</span>
                {lang === "FR" ? "Prochain Défi" : "Next Challenge"}
              </h3>
              <p className="goal-description">
                {lang === "FR"
                  ? "Recherche un stage de fin d'études (PFE) de 6 mois à partir de janvier 2026 pour appliquer mes compétences en Big Data et IA."
                  : "Looking for a 6-month end-of-study internship (PFE) starting January 2026 to apply my Big Data and AI skills."}
              </p>
            </div>

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
                onClick={handleDownloadCV}
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

          {/* === Section Photo - Déplacée un peu en haut === */}
          <div className="photo-section" style={{ marginTop: '-650px' }}>
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