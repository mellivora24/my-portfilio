import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import profilePic from '../../assets/images/logo512.png'; // eslint-disable-line

function About() {
  const { t } = useTranslation(); // eslint-disable-line

  return (
    <section id="about" className="about-section">
      <h1 className="about-title">Hi there! I'm Quyết Thành</h1>
    </section>
  );
}

export default About;