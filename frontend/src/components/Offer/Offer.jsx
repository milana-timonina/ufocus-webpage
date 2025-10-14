import React, { useState } from 'react';
import './Offer.css';
import { useTranslation } from 'react-i18next';

const ServiceBlock = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="service-block">
      <div className="service-header" onClick={() => setIsOpen(v => !v)}>
        <h2>{title}</h2>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="service-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default function Offer() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true });

  return (
    <div className="offer">
      <div className="number-name">
        <h1>{t('services.title')}</h1>
        <p>{t('services.subtitle')}</p>
      </div>

      <div className="services1">
        {items.map((it, idx) => (
          <ServiceBlock key={idx} title={it.title} content={it.content} />
        ))}
      </div>
    </div>
  );
}
