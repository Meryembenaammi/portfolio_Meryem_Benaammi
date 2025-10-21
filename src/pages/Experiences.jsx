import React from "react";
import atlanticLogo from "../assets/logos/atlantic.jpeg";
import emiLogo from "../assets/logos/EMI.jpeg";
import ministereLogo from "../assets/logos/Ministere.jpeg";

export default function Experiences({ lang }) {
  const experiences = [
    {
      id: 1,
      title: lang === "FR" ? "Stage en Big Data & Business Intelligence" : "Big Data & Business Intelligence Internship",
      company: "Atlantic Smart Technology",
      location: "KENITRA, MOROCCO",
      period: lang === "FR" ? "De juin 2024 à août 2024" : "June 2024 to August 2024",
      type: lang === "FR" ? "Stage d'application" : "Professional Internship",
      icon: "📊",
      color: "#667eea",
      status: lang === "FR" ? "Terminé" : "Completed",
      logo: atlanticLogo,
      achievements: [
        lang === "FR" 
          ? "Développement d'un tableau de bord décisionnel complet en Power BI pour le projet SMARTTRAFFIC-CS, incluant l'analyse des flux de transport en temps réel et l'optimisation des itinéraires"
          : "Development of a comprehensive Power BI decision-making dashboard for SMARTTRAFFIC-CS project, including real-time transport flow analysis and route optimization",
        lang === "FR" 
          ? "Création de visualisations interactives avancées avec Power BI (graphiques dynamiques, cartes thermiques, indicateurs KPI) pour faciliter la prise de décision"
          : "Creation of advanced interactive visualizations with Power BI (dynamic charts, heat maps, KPI indicators) to facilitate decision-making",
        lang === "FR" 
          ? "Conception et mise en œuvre de pipelines ETL pour l'intégration de données provenant de multiples sources (capteurs IoT, bases de données, APIs)"
          : "Design and implementation of ETL pipelines for data integration from multiple sources (IoT sensors, databases, APIs)",
        lang === "FR" 
          ? "Participation active à l'élaboration de recommandations stratégiques basées sur l'analyse de données pour améliorer l'efficacité du transport public"
          : "Active participation in developing data-driven strategic recommendations to improve public transport efficiency",
        lang === "FR" 
          ? "Formation et accompagnement des équipes sur l'utilisation des outils de Business Intelligence et l'interprétation des données"
          : "Training and support for teams on Business Intelligence tools usage and data interpretation"
      ],
      technologies: ["Power BI", "ETL", "Data Visualization", "Business Intelligence", "SQL", "DAX", "GPS Data"]
    },
    {
      id: 2,
      title: lang === "FR" ? "Stage d'Application en Intelligence Artificielle" : "Artificial Intelligence Application Internship",
      company: "Ecole Mohammadia d'Ingénieurs",
      location: "RABAT, MOROCCO",
      period: lang === "FR" ? "De juillet 2024 à août 2024" : "July 2024 to August 2024",
      type: lang === "FR" ? "Stage Académique" : "Academic Internship",
      icon: "🤖",
      color: "#ff6b6b",
      status: lang === "FR" ? "Terminé" : "Completed",
      logo: emiLogo,
      achievements: [
        lang === "FR" 
          ? "Développement et intégration d'un système de mobilité intelligente utilisant l'IA pour réguler le trafic en temps réel et optimiser les flux de circulation"
          : "Development and integration of an intelligent mobility system using AI to regulate real-time traffic and optimize traffic flows",
        lang === "FR" 
          ? "Implémentation d'un modèle de détection d'objets YOLO (You Only Look Once) pour identifier automatiquement les véhicules d'urgence et ajuster les feux de circulation"
          : "Implementation of a YOLO (You Only Look Once) object detection model to automatically identify emergency vehicles and adjust traffic lights",
        lang === "FR" 
          ? "Analyse approfondie des interactions entre différents réseaux de transport (routier) pour optimiser la coordination intermodale"
          : "In-depth analysis of interactions between different transport networks (road, rail, air) to optimize intermodal coordination",
        lang === "FR" 
          ? "Création d'algorithmes de prédiction du trafic basés sur l'apprentissage automatique pour anticiper les congestions et proposer des itinéraires alternatifs"
          : "Creation of machine learning-based traffic prediction algorithms to anticipate congestion and suggest alternative routes",
        lang === "FR" 
          ? "Développement d'une interface utilisateur intuitive pour la visualisation des données de trafic et la gestion des alertes en temps réel"
          : "Development of an intuitive user interface for traffic data visualization and real-time alert management"
      ],
      technologies: ["YOLO", "Computer Vision", "Real-time Analysis", "Traffic Management", "Machine Learning", "Python", "OpenCV", "TensorFlow"]
    },
    {
      id: 3,
      title: lang === "FR" ? "Stage d'Initiation Professionnelle" : "Professional Initiation Internship",
      company: "Ministère de l'Industrie et du Commerce",
      location: "RABAT, MOROCCO",
      period: lang === "FR" ? "De juillet 2023 à août 2023" : "July 2023 to August 2023",
      type: lang === "FR" ? "Stage d'Initiation" : "Initiation Internship",
      icon: "🏛️",
      color: "#4ecdc4",
      status: lang === "FR" ? "Terminé" : "Completed",
      logo: ministereLogo,
      achievements: [
        lang === "FR" 
          ? "Conception et déploiement d'une plateforme de travail collaboratif moderne utilisant Microsoft SharePoint pour améliorer la communication inter-départementale"
          : "Design and deployment of a modern collaborative work platform using Microsoft SharePoint to improve inter-departmental communication",
        
        lang === "FR" 
          ? "Optimisation des processus administratifs en digitalisant les formulaires et en automatisant les workflows de validation"
          : "Administrative process optimization by digitizing forms and automating validation workflows",
        lang === "FR" 
          ? "Formation du personnel administratif sur l'utilisation des nouveaux outils numériques et les bonnes pratiques de gestion documentaire"
          : "Administrative staff training on the use of new digital tools and document management best practices",
        lang === "FR" 
          ? "Mise en place d'un système de gestion documentaire centralisé pour faciliter l'archivage et la recherche de documents officiels"
          : "Implementation of a centralized document management system to facilitate archiving and searching of official documents",
        lang === "FR" 
          ? "Participation à l'élaboration de la stratégie de transformation digitale du Ministère et à la rédaction du cahier des charges techniques"
          : "Participation in the development of the Ministry's digital transformation strategy and technical specifications drafting"
      ],
      technologies: ["Microsoft SharePoint", "Digital Transformation", "Administrative Management", "Document Management", "Workflow Automation"]
    }
  ];

  const experienceStats = [
    {
      number: "3",
      label: lang === "FR" ? "Stages" : "Internships"
    },
    {
      number: "12+",
      label: lang === "FR" ? "Mois d'Expérience" : "Months Experience"
    },
    {
      number: "100%",
      label: lang === "FR" ? "Satisfaction" : "Satisfaction"
    }
  ];

  return (
    <section className="experiences-section">
      <div className="experiences-container">
        <div className="experiences-header">
          <h1 className="experiences-title">
            {lang === "FR" ? "Mes Stages Professionnels" : "My Professional Internships"}
          </h1>
          <div className="title-underline"></div>
          <p className="experiences-subtitle">
            {lang === "FR" 
              ? "Mon parcours à travers différents stages dans les domaines du Big Data, de l'IA et de la transformation digitale" 
              : "My journey through various internships in Big Data, AI and digital transformation domains"}
          </p>
        </div>

        <div className="experiences-footer">
          <div className="experience-stats">
            {experienceStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="experiences-timeline">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="experience-item" style={{'--experience-color': experience.color}}>
              <div className="experience-timeline-marker">
                <div className="timeline-icon">{experience.icon}</div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-meta">
                    <div className="experience-type">{experience.type}</div>
                    <div className="experience-period">{experience.period}</div>
                  </div>
                  <div className="experience-status">{experience.status}</div>
                </div>
                
                <div className="experience-content">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-company">
                    <div className="company-info">
                      {experience.logo && (
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`} 
                          className="company-logo"
                        />
                      )}
                      <div className="company-details">
                        <span className="company-name">{experience.company}</span>
                        <span className="company-location">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-achievements">
                    <h4 className="achievements-title">{lang === "FR" ? "Réalisations" : "Achievements"}</h4>
                    <ul className="achievements-list">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="achievement-item">
                          <span className="achievement-bullet"></span>
                          <span className="achievement-text">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="experience-technologies">
                    <h4 className="tech-title">{lang === "FR" ? "Technologies & Outils" : "Technologies & Tools"}</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag" style={{'--tech-color': experience.color}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="experience-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}