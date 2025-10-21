import React, { useState } from "react";
import QRCode from "react-qr-code";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import linkedinLogo from "../assets/logos/linkedin.png";
import githubLogo from "../assets/logos/github.png";

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('');
    
    try {
      // Vérification de la configuration EmailJS
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
          EMAILJS_CONFIG.SERVICE_ID === 'service_portfolio' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'template_contact') {
        throw new Error('EmailJS not configured');
      }

      // Paramètres du template
      const templateParams = {
        name: formData.name,           // Pour {{name}} dans le template
        email: formData.email,          // Pour {{email}} dans le template
        from_name: formData.name,      // Pour {{from_name}} dans le template
        from_email: formData.email,    // Pour {{from_email}} dans le template
        subject: formData.subject,
        message: formData.message,
        to_email: 'meryembenaami@gmail.com',
        sent_date: new Date().toLocaleString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      
      // Envoi de l'email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 5000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setIsSubmitting(false);
      
      // Message d'erreur plus informatif
      if (error.message === 'EmailJS not configured') {
        setErrorMessage(
          lang === "FR" 
            ? "Le formulaire n'est pas encore configuré. Veuillez me contacter directement par email : meryembenaami@gmail.com"
            : "The form is not yet configured. Please contact me directly by email: meryembenaami@gmail.com"
        );
      } else {
        setErrorMessage(
          lang === "FR" 
            ? "Erreur lors de l'envoi du message. Veuillez me contacter directement par email : meryembenaami@gmail.com"
            : "Error sending message. Please contact me directly by email: meryembenaami@gmail.com"
        );
      }
      setTimeout(() => setErrorMessage(''), 8000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: lang === "FR" ? "Email Professionnel" : "Professional Email",
      value: "meryembenaami@gmail.com",
      link: "mailto:meryembenaami@gmail.com"
    },
    {
      icon: "📞",
      label: lang === "FR" ? "Téléphone" : "Phone",
      value: "+212 604 872 163",
      link: "tel:+212604872163"
    },
    {
      icon: "🌍",
      label: lang === "FR" ? "Localisation" : "Location",
      value: "Rabat, Morocco",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      logo: linkedinLogo,
      url: "https://www.linkedin.com/in/meryem-ben-aammi-453611227/",
      color: "#0077b5"
    },
    {
      name: "GitHub",
      icon: "🐙",
      logo: githubLogo,
      url: "https://github.com/Meryembenaammi",
      color: "#333"
    }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">
            {lang === "FR" ? "Contactez-Moi" : "Get In Touch"}
          </h1>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            {lang === "FR" 
              ? "Prêt à collaborer sur des projets innovants ? N'hésitez pas à me contacter pour discuter d'opportunités professionnelles."
              : "Ready to collaborate on innovative projects? Feel free to contact me to discuss professional opportunities."}
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info & QR Code */}
          <div className="contact-info-section">
            <div className="contact-details">
              <h2 className="section-title">
                {lang === "FR" ? "Coordonnées" : "Contact Information"}
              </h2>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="info-value link">
                          {info.value}
                        </a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3 className="social-title">
                  {lang === "FR" ? "Réseaux Sociaux" : "Social Networks"}
                </h3>
                <div className="social-buttons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                      style={{'--social-color': social.color}}
                    >
                      <img 
                        src={social.logo} 
                        alt={`${social.name} logo`} 
                        className="social-logo"
                      />
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="qr-section">
              <div className="qr-container">
                <h3 className="qr-title">
                  {lang === "FR" ? "Scan pour LinkedIn" : "Scan for LinkedIn"}
                </h3>
                <div className="qr-code-wrapper">
                  <QRCode 
                    value="https://www.linkedin.com/in/meryem-ben-aammi-453611227/" 
                    size={180}
                  />
                </div>
                <p className="qr-description">
                  {lang === "FR" 
                    ? "Scannez pour accéder directement à mon profil LinkedIn"
                    : "Scan to access my LinkedIn profile directly"}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">
              {lang === "FR" ? "Formulaire de Contact" : "Contact Form"}
            </h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {lang === "FR" ? "Nom Complet" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder={lang === "FR" ? "Votre nom complet" : "Your full name"}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {lang === "FR" ? "Email" : "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder={lang === "FR" ? "votre@email.com" : "your@email.com"}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {lang === "FR" ? "Sujet" : "Subject"}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder={lang === "FR" ? "Sujet de votre message" : "Message subject"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {lang === "FR" ? "Message" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                  required
                  placeholder={lang === "FR" 
                    ? "Décrivez votre projet ou votre demande..." 
                    : "Describe your project or request..."}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    {lang === "FR" ? "Envoi en cours..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <span className="button-icon">📤</span>
                    {lang === "FR" ? "Envoyer le Message" : "Send Message"}
                  </>
                )}
              </button>

                    {submitStatus === 'success' && (
                      <div className="success-message">
                        <span className="success-icon">✅</span>
                        {lang === "FR" 
                          ? "Message envoyé avec succès ! Je vous répondrai bientôt." 
                          : "Message sent successfully! I'll get back to you soon."}
                      </div>
                    )}

                    {errorMessage && (
                      <div className="error-message">
                        <span className="error-icon">❌</span>
                        {errorMessage}
                      </div>
                    )}
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="contact-footer">
          <div className="availability-info">
            <div className="availability-icon">🕒</div>
            <div className="availability-text">
              <strong>{lang === "FR" ? "Disponibilité" : "Availability"}</strong>
              <span>{lang === "FR" ? "Télétravail ou présentiel " : "Remote or on-site"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
