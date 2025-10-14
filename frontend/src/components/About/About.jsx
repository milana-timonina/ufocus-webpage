import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='about'>
      <div className="about-block">
        <h1>{t('about.titleCaps')}</h1>
        <p>{t('about.long')}</p>
      </div>
    </div>
  );
};

export default About;
