import React from "react";

export default function Projets({ lang }) {
  const projects = [
    {
      id: 1,
      title: lang === "FR" ? "Chatbot pour une Application de Planification de Voyage Alimentée par l'IA" : "AI-Powered Travel Planning Chatbot",
      description: lang === "FR" 
        ? "Un chatbot intelligent améliore l'expérience utilisateur en fournissant une assistance instantanée et des suggestions personnalisées en temps réel selon votre budget."
        : "An intelligent chatbot enhances user experience by providing instant assistance and personalized real-time suggestions based on your budget.",
      technologies: ["Python", "MongoDB", "LLM", "RAG", "Embedding Models"],
      category: lang === "FR" ? "Intelligence Artificielle" : "Artificial Intelligence",
      icon: "🤖",
      color: "#ff6b6b",
      status: lang === "FR" ? "Terminé" : "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: lang === "FR" ? "Application Web pour la Gestion des Affectations et Évaluations des Développeurs" : "Web Application for Developer Assignment and Evaluation Management",
      description: lang === "FR" 
        ? "Optimisation de l'attribution des développeurs aux projets selon leurs compétences, suivi de l'avancement des tâches et évaluation objective des contributions."
        : "Optimization of developer assignment to projects based on their skills, task progress tracking and objective evaluation of contributions.",
      technologies: ["Spring Boot", "IntelliJ IDEA", "JPA/Hibernate"],
      category: lang === "FR" ? "Développement Web" : "Web Development",
      icon: "🌐",
      color: "#4ecdc4",
      status: lang === "FR" ? "Terminé" : "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: lang === "FR" ? "Application de Gestion des Ventes en Ligne" : "Online Sales Management Application",
      description: lang === "FR" 
        ? "L'application permettait l'enregistrement, la consultation et la génération de rapports sur les ventes en ligne de manière efficace."
        : "The application enabled efficient recording, consultation and generation of online sales reports.",
      technologies: ["JAVA", "SQL"],
      category: lang === "FR" ? "Développement Backend" : "Backend Development",
      icon: "💼",
      color: "#45b7d1",
      status: lang === "FR" ? "Terminé" : "Completed",
      year: "2023"
    },
    {
      id: 4,
      title: lang === "FR" ? "Analyse du Comportement et Émotions face au Séisme El Haouz 2023" : "Analysis of Behavior and Emotions during El Haouz 2023 Earthquake",
      description: lang === "FR" 
        ? "Analyse des données à l'aide d'un tableau de bord interactif, permettant d'explorer les tendances et de valider des hypothèses à l'aide de techniques statistiques et de visualisations graphiques."
        : "Data analysis using an interactive dashboard, enabling trend exploration and hypothesis validation using statistical techniques and graphical visualizations.",
      technologies: ["R", "RStudio", "Power BI"],
      category: lang === "FR" ? "Data Analytics" : "Data Analytics",
      icon: "📊",
      color: "#96ceb4",
      status: lang === "FR" ? "Terminé" : "Completed",
      year: "2023"
    },
    {
      id: 5,
      title: lang === "FR" ? "Plateforme Cloud Azure pour l'Apprentissage Linguistique Intelligent" : "Azure Cloud Platform for Intelligent Language Learning",
      description: lang === "FR" 
        ? "Conception d'une plateforme immersive permettant l'apprentissage de plusieurs langues, intégrant les services Azure AI."
        : "Design of an immersive platform enabling multi-language learning, integrating Azure AI services.",
      technologies: ["Azure AI Services", "Azure Cognitive Services", "Azure Computer Vision", "Azure Speech-to-Text"],
      category: lang === "FR" ? "Cloud Computing" : "Cloud Computing",
      icon: "☁️",
      color: "#feca57",
      status: lang === "FR" ? "Terminé" : "Completed",
      year: "2024"
    },
    {
      id: 6,
      title: lang === "FR" ? "Application Java de Commande de Repas pour Restaurant Universitaire" : "Java Food Ordering Application for University Restaurant",
      description: lang === "FR" 
        ? "Ce projet vise à concevoir et développer une application en Java pour la commande de repas dans un restaurant universitaire. Cette application utilise les technologies modernes du marché pour offrir une solution aux défis rencontrés dans la gestion des commandes, tels que les erreurs de saisie, la complexité des manipulations et la perte d'informations."
        : "This project aims to design and develop a Java application for food ordering in a university restaurant. This application uses modern market technologies to provide a solution to challenges encountered in order management, such as input errors, manipulation complexity and information loss.",
      technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
      category: lang === "FR" ? "Développement Desktop" : "Desktop Development",
      icon: "🍽️",
      color: "#ff9ff3",
      status: lang === "FR" ? "Terminé" : "Completed",
      year: "2023-2024"
    }
  ];

  const projectStats = [
    {
      number: "6+",
      label: lang === "FR" ? "Projets Réalisés" : "Projects Completed"
    },
    {
      number: "12+",
      label: lang === "FR" ? "Technologies Maîtrisées" : "Technologies Mastered"
    },
    {
      number: "100%",
      label: lang === "FR" ? "Taux de Réussite" : "Success Rate"
    }
  ];

  return (
    <section className="projets-section">
      <div className="projets-container">
        <div className="projets-header">
          <h1 className="projets-title">
            {lang === "FR" ? "Mes Projets" : "My Projects"}
          </h1>
          <div className="title-underline"></div>
          <p className="projets-subtitle">
            {lang === "FR" 
              ? "Une sélection de mes projets académiques  dans le cadre de ma formation dans les domaines de l'IA, du développement web et de l'analyse de données" 
              : "A selection of my academic and professional projects in AI, web development and data analysis domains"}
          </p>
        </div>

        <div className="projets-footer">
          <div className="project-stats">
            {projectStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{'--project-color': project.color}}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-meta">
                  <div className="project-category">{project.category}</div>
                  <div className="project-year">{project.year}</div>
                </div>
                <div className="project-status">{project.status}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <h4 className="tech-title">{lang === "FR" ? "Technologies Utilisées" : "Technologies Used"}</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag" style={{'--tech-color': project.color}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
