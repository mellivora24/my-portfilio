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
          <h1 className="shiny-text">
            {t("about.greeting")}
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Victory%20Hand%20Medium-Light%20Skin%20Tone.png" alt="Victory Hand Medium-Light Skin Tone" width="80" height="80" />
          </h1>
          <h2>{t("about.description")}</h2>
          <a href="#contact" className="custom-button-wrapper">
            <Button text={t("about.hire_me")} href="#contact" />
          </a>
        </div>
        <div className="profile-card">
          <img src={profileCard} alt="Profile Card" />
        </div>
      </div>
    </section>
  );
}

export default About;
