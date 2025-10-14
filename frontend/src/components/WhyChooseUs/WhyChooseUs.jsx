import React from 'react';
import './WhyChooseUs.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div className="why-choose-us">
      <h2>{t('why.title')}</h2>

      <div className="section">
        <img src={assets.personalized_approach} alt="Personalized Approach" />
        <div>
          <h3>{t('why.cards.personalized.title')}</h3>
          <p>{t('why.cards.personalized.desc')}</p>
        </div>
      </div>

      <div className="section">
        <img src={assets.insightful_tutoring} alt="Insightful Tutoring" />
        <div>
          <h3>{t('why.cards.tutoring.title')}</h3>
          <p>{t('why.cards.tutoring.desc')}</p>
        </div>
      </div>

      <div className="section">
        <img src={assets.unique_team} alt="Unique Team" />
        <div>
          <h3>{t('why.cards.team.title')}</h3>
          <p>{t('why.cards.team.desc')}</p>
        </div>
      </div>

      <div className="section">
        <img src={assets.variety_of_services} alt="Variety of Services" />
        <div>
          <h3>{t('why.cards.variety.title')}</h3>
          <p>{t('why.cards.variety.desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
