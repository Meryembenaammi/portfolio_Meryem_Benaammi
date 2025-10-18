import React from "react";
import uirLogo from "../assets/logos/uir-logo.png";

export default function Parcours({ lang }) {
  const educationData = [
    {
      year: "2025-2026",
      title: lang === "FR" ? "3ᵉ année Cycle d'ingénieur" : "3rd Year Engineering Cycle",
      institution: "Université internationale de Rabat",
      specialization: lang === "FR" ? "Spécialité Big Data & IA" : "Big Data & AI Specialization",
      status: lang === "FR" ? "En cours" : "In Progress",
      icon: "🎓",
      color: "#ff6b6b",
      description: lang === "FR" ? "Formation avancée en Intelligence Artificielle et traitement de données massives" : "Advanced training in Artificial Intelligence and big data processing"
    },
    {
      year: "2024-2025",
      title: lang === "FR" ? "2ᵉ année Cycle d'ingénieur" : "2nd Year Engineering Cycle",
      institution: "Université internationale de Rabat",
      specialization: lang === "FR" ? "Spécialité Big Data & IA" : "Big Data & AI Specialization",
      status: lang === "FR" ? "Terminé" : "Completed",
      icon: "📊",
      color: "#4ecdc4",
      description: lang === "FR" ? "Approfondissement des concepts d'analyse de données et machine learning" : "Deepening data analysis and machine learning concepts"
    },
    {
      year: "2023-2024",
      title: lang === "FR" ? "1ʳᵉ année Cycle d'ingénieur" : "1st Year Engineering Cycle",
      institution: "Université internationale de Rabat",
      specialization: lang === "FR" ? "Spécialité Big Data & IA" : "Big Data & AI Specialization",
      status: lang === "FR" ? "Terminé" : "Completed",
      icon: "🔬",
      color: "#45b7d1",
      description: lang === "FR" ? "Introduction aux technologies émergentes et bases de l'ingénierie" : "Introduction to emerging technologies and engineering fundamentals"
    },
    {
      year: "2021-2023",
      title: lang === "FR" ? "Années préparatoires ESIN" : "ESIN Preparatory Years",
      institution: "Université internationale de Rabat",
      specialization: lang === "FR" ? "Classes préparatoires" : "Preparatory Classes",
      status: lang === "FR" ? "Terminé" : "Completed",
      icon: "📚",
      color: "#96ceb4",
      description: lang === "FR" ? "Formation intensive en mathématiques, physique et sciences de l'ingénieur" : "Intensive training in mathematics, physics and engineering sciences"
    },
    {
      year: "2020-2021",
      title: lang === "FR" ? "Baccalauréat Scientifique" : "Scientific Baccalaureate",
      institution: "Ecole Narjiss Privée, Agadir",
      specialization: lang === "FR" ? "Sciences Physiques" : "Physical Sciences",
      status: lang === "FR" ? "Obtenu avec mention" : "Obtained with distinction",
      icon: "🏆",
      color: "#feca57",
      description: lang === "FR" ? "Diplôme obtenu avec mention  bien, spécialisation en sciences physiques" : "Diploma obtained with high distinction, specialization in physical sciences"
    }
  ];

  return (
    <section className="parcours-section">
      <div className="parcours-container">
        <div className="parcours-header">
          <h1 className="parcours-title">
            {lang === "FR" ? "Parcours Académique" : "Education"}
          </h1>
          <div className="title-underline"></div>
          <p className="parcours-subtitle">
            {lang === "FR" 
              ? "Mon parcours éducatif et mes formations spécialisées" 
              : "My educational journey and specialized training"
            }
          </p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-card" style={{'--accent-color': item.color}}>
                  <div className="card-header">
                    <div className="year-badge">{item.year}</div>
                    <div className={`status-badge ${item.status === (lang === "FR" ? "Terminé" : "Completed") ? 'status-completed' : 'status-in-progress'}`}>{item.status}</div>
                  </div>
                  
                  <div className="card-body">
                    <div className="institution-info">
                      <div className="institution-icon">{item.icon}</div>
                      <div className="institution-details">
                        <h3 className="institution-name">
                          {item.institution}
                          {item.institution === "Université internationale de Rabat" && (
                            <img src={uirLogo} alt="UIR Logo" className="uir-logo" />
                          )}
                        </h3>
                        <h4 className="degree-title">{item.title}</h4>
                        <p className="specialization">{item.specialization}</p>
                      </div>
                    </div>
                    
                    <p className="description">{item.description}</p>
                    
                    <div className="card-footer">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{'--progress-color': item.color}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-glow" style={{'--glow-color': item.color}}></div>
                </div>
              </div>
              
              <div className="timeline-marker" style={{'--marker-color': item.color}}>
                <div className="marker-inner"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="parcours-footer">
          <div className="achievement-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">{lang === "FR" ? "Années d'études" : "Years of Study"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">{lang === "FR" ? "Réussite" : "Success Rate"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">AI/BD</div>
              <div className="stat-label">{lang === "FR" ? "Spécialisation" : "Specialization"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
