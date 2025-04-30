import "./About.css";

import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

import profileCard from "../../assets/images/profile-card.png";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>👋 Hi there!</h1>
          <h2>I'm Thanh, I realy realy like to work with microprocessor like: AVR, Cortex, ESP,..</h2>
          <Button text={t("navbar.contact")} href="#projects" />
        </div>
        <div className="profile-card">
          <img src={profileCard} alt="Profile Card" />
        </div>
      </div>
    </section>
  );
}

export default About;
