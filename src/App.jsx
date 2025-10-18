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
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("FR");

  // Initialiser AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Appliquer la classe 'dark' sur le body pour le mode sombre
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

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
        lang={lang}
        setLang={setLang}
      />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
