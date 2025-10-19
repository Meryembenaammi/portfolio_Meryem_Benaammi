import './styles/global.css';
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Experiences from "./pages/Experiences";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true); // Mode sombre par défaut
  const [lang, setLang] = useState("FR");

  // Initialiser AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Gérer le thème au chargement de l'application
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.body.classList.add('light');
    } else {
      setDarkMode(true);
      document.body.classList.remove('light');
    }
  }, []);

  // Appliquer le thème quand darkMode change
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home lang={lang} />;
      case "parcours": return <Parcours lang={lang} />;
      case "competences": return <Competences lang={lang} />;
      case "projets": return <Projets lang={lang} />;
      case "experiences": return <Experiences lang={lang} />;
      case "certifications": return <Certifications lang={lang} />;
      case "contact": return <Contact lang={lang} />;
      default: return <Home lang={lang} />;
    }
  };

  return (
    <>
      <Navbar
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleTheme={toggleTheme}
        lang={lang}
        setLang={setLang}
      />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;