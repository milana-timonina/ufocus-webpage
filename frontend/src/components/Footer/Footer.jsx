import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* LEFT: logo + paragraph + socials */}
        <div className="footer-content-left">
          <img src={assets.logo_white} alt="U-Focus" />
          <p>{t('footer.tagline.long')}</p>
          <div className="footer-social-icons">
              <a href="https://instagram.com/ufocus_admissions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={assets.instagram_white} alt="Instagram" />
              </a>
              <a href="https://facebook.com/ufocus_admissions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={assets.facebook_white} alt="Facebook" />
              </a>
            </div>

        </div>

        {/* CENTER: COMPANY (puts the 3rd column back) */}
        <div className="footer-content-center">
          <h3>{t('footer.company')}</h3>
          <ul>
            <li><NavLink to="/" onClick={() => window.scrollTo(0, 0)}>{t('nav.about')}</NavLink></li>
            <li><NavLink to="/services" onClick={() => window.scrollTo(0, 0)}>{t('nav.services')}</NavLink></li>
            <li><NavLink to="/prices" onClick={() => window.scrollTo(0, 0)}>{t('nav.prices')}</NavLink></li>
            <li><NavLink to="/contacts" onClick={() => window.scrollTo(0, 0)}>{t('nav.contacts')}</NavLink></li>
          </ul>
        </div>

        {/* RIGHT: GET IN TOUCH (email only, phone removed) */}
        <div className="footer-content-right">
          <h3>{t('footer.getInTouch')}</h3>
          <ul>
            <li>ufocus.education@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">© 2024 U-Focus</p>
    </div>
  );
}
