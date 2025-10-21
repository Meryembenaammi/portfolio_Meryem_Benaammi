import React from "react";

export default function Competences({ lang }) {
  const softSkills = [
    {
      title: lang === "FR" ? "Soft Skills" : "Soft Skills",
      icon: "🌟",
      color: "#ffd700",
      skills: [
        { name: lang === "FR" ? "Ponctualité" : "Punctuality", level: 95 },
        { name: lang === "FR" ? "Communication" : "Communication", level: 90 },
        { name: lang === "FR" ? "Travail d'équipe" : "Teamwork", level: 90 },
        { name: lang === "FR" ? "Leadership" : "Leadership", level: 85 },
        { name: lang === "FR" ? "Adaptabilité" : "Adaptability", level: 90 },
        { name: lang === "FR" ? "Résolution de problèmes" : "Problem Solving", level: 95 },
        { name: lang === "FR" ? "Créativité" : "Creativity", level: 85 },
        { name: lang === "FR" ? "Gestion du temps" : "Time Management", level: 90 }
      ]
    }
  ];

  const skillCategories = [
    {
      title: lang === "FR" ? "Big Data & Cloud" : "Big Data & Cloud",
      icon: "☁️",
      color: "#667eea",
      skills: [
        { name: "Hadoop", level: 85 },
        { name: "Spark", level: 90 },
        { name: "Kafka", level: 80 },
        { name: "Hive", level: 85 },
        { name: "NiFi", level: 75 },
        { name: "Airflow", level: 80 },
        { name: "Talend", level: 70 },
        { name: "Cloudera", level: 75 },
        { name: "Cloud Data Warehousing", level: 85 },
        { name: "Azure AI Services", level: 80 },
        { name: "Cloud Computing", level: 90 }
      ]
    },
    {
      title: lang === "FR" ? "Business Intelligence & Data Analytics" : "Business Intelligence & Data Analytics",
      icon: "📊",
      color: "#4ecdc4",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Data Analytics", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "Oracle", level: 80 },
        { name: "NoSQL (MongoDB)", level: 85 }
      ]
    },
    {
      title: lang === "FR" ? "Machine Learning & Intelligence Artificielle" : "Machine Learning & Artificial Intelligence",
      icon: "🤖",
      color: "#ff6b6b",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "NLP (Natural Language Processing)", level: 80 },
        { name: "LLM (Large Language Models)", level: 75 },
        { name: "Computer Vision", level: 85 },
        { name: "Python", level: 95 },
        { name: "OpenCV", level: 80 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Face++", level: 70 },
        { name: "Dlib", level: 75 },
        { name: "Scikit-learn", level: 90 }
      ]
    },
    {
      title: lang === "FR" ? "Langages de Programmation" : "Programming Languages",
      icon: "💻",
      color: "#45b7d1",
      skills: [
        { name: "C", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 95 },
        { name: "R", level: 75 }
      ]
    },
    {
      title: lang === "FR" ? "Modélisation & Outils" : "Modeling & Tools",
      icon: "🔧",
      color: "#96ceb4",
      skills: [
        { name: "UML", level: 80 }
      ]
    },
    {
      title: lang === "FR" ? "Développement Web & Frameworks" : "Web Development & Frameworks",
      icon: "🌐",
      color: "#feca57",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Flask", level: 80 },
        { name: "PHP", level: 75 },
        { name: "JEE", level: 70 }
      ]
    },
    {
      title: lang === "FR" ? "Développement Mobile" : "Mobile Development",
      icon: "📱",
      color: "#ff9ff3",
      skills: [
        { name: "Android", level: 80 },
        { name: "Flutter", level: 75 }
      ]
    },
    {
      title: lang === "FR" ? "Bureautique" : "Office Tools",
      icon: "📄",
      color: "#54a0ff",
      skills: [
        { name: "Microsoft Word", level: 95 },
        { name: "PowerPoint", level: 90 },
        { name: "Excel", level: 85 }
      ]
    }
  ];

  return (
    <section className="competences-section">
      <div className="competences-container">
        {/* Header */}
        <div className="competences-header">
          <h1 className="competences-title">
            {lang === "FR" ? "Mes Compétences" : "My Skills"}
          </h1>
          <div className="title-underline"></div>
          <p className="competences-subtitle">
            {lang === "FR" 
              ? "Un aperçu complet de mes compétences techniques et comportementales" 
              : "A comprehensive overview of my technical and behavioral skills"}
          </p>
        </div>

        {/* Stats Section */}
        <div className="competences-footer">
          <div className="skill-stats">
            <div className="stat-item">
              <div className="stat-number">9+</div>
              <div className="stat-label">{lang === "FR" ? "Domaines" : "Domains"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">58+</div>
              <div className="stat-label">{lang === "FR" ? "Compétences" : "Skills"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">{lang === "FR" ? "Expertise" : "Expertise"}</div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="skills-sections">
          {/* Soft Skills Section */}
          <div className="skills-section soft-skills-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🌟</span>
                {lang === "FR" ? "Soft Skills" : "Soft Skills"}
              </h2>
              <p className="section-subtitle">
                {lang === "FR" 
                  ? "Mes compétences comportementales et interpersonnelles" 
                  : "My behavioral and interpersonal skills"}
              </p>
            </div>
            
            <div className="skills-grid">
              {softSkills.map((category, categoryIndex) => (
                <div key={`soft-${categoryIndex}`} className="skill-category" style={{'--category-color': category.color}}>
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-title">{category.title}</h3>
                  </div>
                  
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{
                              '--skill-level': `${skill.level}%`,
                              '--skill-color': category.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="skills-section technical-skills-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">💻</span>
                {lang === "FR" ? "Compétences Techniques" : "Technical Skills"}
              </h2>
              <p className="section-subtitle">
                {lang === "FR" 
                  ? "Mes compétences techniques dans les domaines du Big Data, de l'IA et du développement" 
                  : "My technical skills in Big Data, AI and development domains"}
              </p>
            </div>
            
            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category" style={{'--category-color': category.color}}>
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-title">{category.title}</h3>
                  </div>
                  
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{
                              '--skill-level': `${skill.level}%`,
                              '--skill-color': category.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="languages-section">
          <div className="languages-header">
            <h3 className="languages-title">
              <span className="languages-icon">🌍</span>
              {lang === "FR" ? "Langues Maîtrisées" : "Languages"}
            </h3>
            <p className="languages-subtitle">
              {lang === "FR" 
                ? "Communication fluide dans plusieurs langues" 
                : "Fluent communication in multiple languages"}
            </p>
          </div>
          
          <div className="languages-grid">
            <div className="language-card arabic">
              <div className="language-flag">🇲🇦</div>
              <div className="language-info">
                <h4 className="language-name">العربية</h4>
                <p className="language-name-en">Arabic</p>
                <div className="language-level">
                  <span className="level-badge native">
                    {lang === "FR" ? "Langue maternelle" : "Native"}
                  </span>
                </div>
              </div>
              <div className="language-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <span className="progress-text">100%</span>
              </div>
            </div>

            <div className="language-card french">
              <div className="language-flag">🇫🇷</div>
              <div className="language-info">
                <h4 className="language-name">Français</h4>
                <p className="language-name-en">French</p>
                <div className="language-level">
                  <span className="level-badge fluent">
                    {lang === "FR" ? "Courant" : "Fluent"}
                  </span>
                </div>
              </div>
              <div className="language-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '95%'}}></div>
                </div>
                <span className="progress-text">95%</span>
              </div>
            </div>

            <div className="language-card english">
              <div className="language-flag">🇺🇸</div>
              <div className="language-info">
                <h4 className="language-name">English</h4>
                <p className="language-name-en">English</p>
                <div className="language-level">
                  <span className="level-badge advanced">
                    {lang === "FR" ? "Avancé" : "Advanced"}
                  </span>
                </div>
              </div>
              <div className="language-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '90%'}}></div>
                </div>
                <span className="progress-text">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}