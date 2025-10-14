import React from 'react';
import './Separate.css';
import { useTranslation } from 'react-i18next';

export default function Separate() {
  const { t } = useTranslation();

  return (
    <div className="package-container">
      <hr />
      <h1>{t('prices.sep.title')}</h1>

      <div className="package-block">
        <div className="package-content">
          <div className="package-details">
            <p>{t('prices.sep.lead')}</p>
            <ul>
              {t('prices.sep.items', { returnObjects: true }).map((li, i) => <li key={i}>{li}</li>)}
            </ul>
            <div className="package-price">{t('prices.sep.price')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
