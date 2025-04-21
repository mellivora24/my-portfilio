import React from 'react';
import ReactDOM from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import './assets/styles/index.css';
import Galaxy from './components/Galaxy';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './i18n';
import setDynamicTitle from './utils/dynamicTitle';
import setDynamicFavicon from './utils/dynamicFavicon';
import setDynamicTheme from './utils/dynamicTheme';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Galaxy />
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" alt="Logo" className="logo" width="40px"/>
          <span className="logo-text">Quyết Thành</span>
        </div>
        <div className="navbar-links">
          <a href="#about">{t('navbar.about')}</a>
          <a href="#skills">{t('navbar.skills')}</a>
          <a href="#projects">{t('navbar.projects')}</a>
          <a href="#contact">{t('navbar.contact')}</a>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setDynamicTitle();
setDynamicFavicon();
setDynamicTheme();