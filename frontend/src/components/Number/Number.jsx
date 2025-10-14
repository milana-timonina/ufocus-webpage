import React from 'react';
import './Number.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

export default function Number() {
  const { t } = useTranslation();

  return (
    <div className="contacts">
      <h2>{t('contacts.title')}</h2>

      <div className="contact-item">
        <img src={assets.instagram_icon} alt="Instagram" />
        <a
          className="contact-name"
          href="https://instagram.com/ufocus_admissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          u-focus
        </a>
      </div>

      <div className="contact-item">
        <img src={assets.facebook_icon} alt="Facebook" />
        <a
          className="contact-name"
          href="https://facebook.com/ufocus_admissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          u-focus
        </a>
      </div>

      <p>{t('contacts.email_line')}</p>
      <p>{t('contacts.reply_time')}</p>
    </div>
  );
}
