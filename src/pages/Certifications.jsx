import React from "react";
import ciscoLogo from "../assets/logos/cisco_logo.jpeg";
import microsoftLogo from "../assets/logos/microsoft_logo.jpeg";
import upennLogo from "../assets/logos/university_of_pennsylvania_logo.jpeg";

export default function Certifications({ lang }) {
  const certifications = [
    {
      id: 1,
      title: lang === "FR" ? "Introduction à l'IA Moderne" : "Introduction to Modern AI",
      issuer: "Cisco",
      year: "2025",
      logo: ciscoLogo,
      color: "#1ba1d9",
      icon: "🤖",
      description: lang === "FR" 
        ? "Certification avancée en intelligence artificielle couvrant les concepts fondamentaux, l'apprentissage automatique et les applications pratiques de l'IA moderne"
        : "Advanced certification in artificial intelligence covering fundamental concepts, machine learning, and practical applications of modern AI",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics", "Data Science"],
      status: "Obtenue"
    },
    {
      id: 2,
      title: lang === "FR" ? "Visualisation de Données avec Power BI" : "Visualization for Data Analysis with Power BI",
      issuer: "Microsoft",
      year: "2025",
      logo: microsoftLogo,
      color: "#00a4ef",
      icon: "📊",
      description: lang === "FR" 
        ? "Certification professionnelle Microsoft pour la création de tableaux de bord interactifs et l'analyse de données avec Power BI"
        : "Professional Microsoft certification for creating interactive dashboards and data analysis with Power BI",
      skills: ["Power BI", "Data Visualization", "DAX", "SQL", "Business Intelligence"],
      status: "Obtenue"
    },
    {
      id: 3,
      title: lang === "FR" ? "Programmation Java et POO" : "Introduction to Java and Object-Oriented Programming",
      issuer: "University of Pennsylvania",
      year: "2023",
      logo: upennLogo,
      color: "#8b0000",
      icon: "☕",
      description: lang === "FR" 
        ? "Certification universitaire en programmation Java et concepts de programmation orientée objet de l'Université de Pennsylvanie"
        : "University certification in Java programming and object-oriented programming concepts from the University of Pennsylvania",
      skills: ["Java", "OOP", "Data Structures", "Algorithms", "Software Engineering"],
      status: "Obtenue"
    }
  ];

  const certificationStats = [
    {
      number: "3",
      label: lang === "FR" ? "Certifications" : "Certifications"
    },
    {
      number: "100%",
      label: lang === "FR" ? "Taux de Réussite" : "Success Rate"
    },
    {
      number: "2+",
      label: lang === "FR" ? "Années d'Expérience" : "Years Experience"
    }
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <div className="certifications-header">
          <h1 className="certifications-title">
            {lang === "FR" ? "Mes Certifications" : "My Certifications"}
          </h1>
          <div className="title-underline"></div>
          <p className="certifications-subtitle">
            {lang === "FR" 
              ? "Mes certifications professionnelles et académiques dans les domaines de l'IA, de la visualisation de données et du développement logiciel" 
              : "My professional and academic certifications in AI, data visualization, and software development domains"}
          </p>
        </div>

        <div className="certifications-footer">
          <div className="certification-stats">
            {certificationStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <div key={certification.id} className="certification-card" style={{'--cert-color': certification.color}}>
              <div className="certification-header">
                <div className="certification-icon">{certification.icon}</div>
                <div className="certification-status" style={{'--status-color': certification.color}}>
                  {certification.status}
                </div>
              </div>
              
              <div className="certification-content">
                <div className="certification-issuer">
                  <div className="issuer-info">
                    {certification.logo && (
                      <img 
                        src={certification.logo} 
                        alt={`${certification.issuer} logo`} 
                        className="issuer-logo"
                      />
                    )}
                    <div className="issuer-details">
                      <span className="issuer-name">{certification.issuer}</span>
                      <span className="certification-year">{certification.year}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="certification-title">{certification.title}</h3>
                <p className="certification-description">{certification.description}</p>
                
                <div className="certification-skills">
                  <h4 className="skills-title">{lang === "FR" ? "Compétences Acquises" : "Skills Acquired"}</h4>
                  <div className="skills-tags">
                    {certification.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag" style={{'--skill-color': certification.color}}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="certification-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
