import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className="App-header">
        <h1>[Your Name]'s Portfolio</h1>
      </header>
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