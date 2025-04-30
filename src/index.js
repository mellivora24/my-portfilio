import React from "react";
import ReactDOM from "react-dom/client";
import { useTranslation } from "react-i18next";

import "./locales/i18n";
import "./assets/styles/index.css";
import "./components/nav_bar/GooeyNav";

import Galaxy from "./components/background/Galaxy";
import About from "./lib/about/About";
import Skills from "./lib/skills/Skills";
import Projects from "./lib/projects/Projects";
import Contact from "./lib/contact/Contact";

import setDynamicTitle from "./utils/dynamicTitle";
import setDynamicFavicon from "./utils/dynamicFavicon";
import setDynamicTheme from "./utils/dynamicTheme";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Galaxy
        particleColors={["#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        particleCount={1000}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif"
            alt="Logo"
            className="logo"
            width="40px"
          />
          <span className="logo-text">{t("navbar.owner")}</span>
        </div>
        <div className="navbar-links">
          <a href="#about">{t("navbar.about")}</a>
          <a href="#skills">{t("navbar.skills")}</a>
          <a href="#projects">{t("navbar.projects")}</a>
          <a href="#contact">{t("navbar.contact")}</a>
          <select
            className="language-dropdown"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>
      </nav>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setDynamicTitle();
setDynamicFavicon();
setDynamicTheme();
