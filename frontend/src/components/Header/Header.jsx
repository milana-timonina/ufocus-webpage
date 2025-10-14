import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import { useTranslation, Trans } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  const ig = assets.instagram_white || assets.instagram_icon;
  const fb = assets.facebook_white  || assets.facebook_icon;

  const toConsult = (e) => {
    e.preventDefault();
    const el = document.getElementById('consult');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>
          <Trans i18nKey="header.title">
            We <span className="highlight-text">empower</span> scholars during every step of the university admissions process.
          </Trans>
        </h2>

        {/* button (not link), visible with your existing styles */}
        <button onClick={toConsult}>
          {t('cta.freeConsult', 'BOOK A FREE CONSULTATION!')}
        </button>

        <div className="social-media-icons">
          <a href="https://instagram.com/ufocus_admissions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img className="icon" src={assets.instagram_icon} alt="Instagram" />
          </a>
          <a href="https://facebook.com/ufocus_admissions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img className="icon" src={assets.facebook_icon} alt="Facebook" />
          </a>
        </div>

      </div>
    </div>
  );
}
