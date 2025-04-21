import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import profilePic from '../../assets/images/logo512.png';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={profilePic} alt="Quyết Thành" className="profile-pic" />
        <h2>{t('about.title')}</h2>
        <p>{t('about.description1', { name: 'Quyết Thành' })}</p>
        <p>{t('about.description2')}</p>
        <div className="skills-list">
          <span className="skill-tag">Arduino</span>
          <span className="skill-tag">ESP32</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">MicroPython</span>
          <span className="skill-tag">IoT</span>
          <span className="skill-tag">C/C++</span>
        </div>
      </div>
    </section>
  );
}

export default About;