import React from 'react';
import { useTranslation } from 'react-i18next';

import "../../locales/i18n";

function Skills() {
  const { t, i18n } = useTranslation(); // eslint-disable-line no-unused-vars
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git']; // eslint-disable-line no-unused-vars

  return (
    <section id="skills" className="section">
      <span>Updating...</span>
    </section>
  );
}

export default Skills;