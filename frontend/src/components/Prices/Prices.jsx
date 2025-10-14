import React from 'react';
import './Prices.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Prices() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const toConsultOnHome = (e) => {
    e.preventDefault();
    // set a one-time target for the next page load
    sessionStorage.setItem('scrollTarget', 'consult');
    navigate('/'); // go to homepage; Layout will scroll to #consult
  };

  const toPurchaseHere = (e) => {
    e.preventDefault();
    const el = document.getElementById('purchase');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="packages-container">
      <h1>{t('prices.title')}</h1>

      {/* Package 1 */}
      <div className="package-block">
        <div className="package-header">{t('prices.p1.header')}</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.variety_of_services} alt="Package 1" />
          </div>
          <div className="package-details">
            <p>{t('prices.p1.desc')}</p>
            <ul>
              {t('prices.p1.items', { returnObjects: true }).map((li, i) => <li key={i}>{li}</li>)}
            </ul>
            <div className="package-price">
              {t('prices.p1.price')} <span>{t('prices.p1.note')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="package-block">
        <div className="package-header">{t('prices.p2.header')}</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.high_school} alt="Package 2" />
          </div>
          <div className="package-details">
            <ul>
              {t('prices.p2.items', { returnObjects: true }).map((li, i) => <li key={i}>{li}</li>)}
            </ul>
            <div className="package-price">{t('prices.p2.price')}</div>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="package-block">
        <div className="package-header">{t('prices.p3.header')}</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.extra_curricular} alt="Package 3" />
          </div>
          <div className="package-details">
            <ul>
              {t('prices.p3.items', { returnObjects: true }).map((li, i) => <li key={i}>{li}</li>)}
            </ul>
            <div className="package-price">{t('prices.p3.price')}</div>
          </div>
        </div>
      </div>

      {/* Package 4 */}
      <div className="package-block">
        <div className="package-header">{t('prices.p4.header')}</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.academic_guidance} alt="Package 4" />
          </div>
          <div className="package-details">
            <ul>
              {t('prices.p4.items', { returnObjects: true }).map((li, i) => <li key={i}>{li}</li>)}
            </ul>
            <div className="package-price">
              {t('prices.p4.price')} <span>{t('prices.p4.note')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Package 5 */}
      <div className="package-block">
        <div className="package-header">{t('prices.p5.header')}</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.u_focus} alt="Package 5" />
          </div>
          <div className="package-details">
            <ul>
              {t('prices.p5.items', { returnObjects: true }).map((li, i) => <li key={i}>{li}</li>)}
            </ul>
            <div className="package-price">
              {t('prices.p5.price')} <span>{t('prices.p5.note')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-price">
        <button type="button" className="buying-button" onClick={toPurchaseHere}>
          {t('prices.cta.buy')}
        </button>
        <button type="button" className="submit-button1" onClick={toConsultOnHome}>
          {t('prices.cta.consult')}
        </button>
      </div>
    </div>
  );
}