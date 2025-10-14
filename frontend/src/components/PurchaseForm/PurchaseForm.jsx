import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './PurchaseForm.css';
import { useTranslation } from 'react-i18next';

export default function PurchaseForm() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [packageOption, setPackageOption] = useState('');
  const [additionalOption, setAdditionalOption] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const USER_ID     = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_USER_ID';

    const formData = { name, email, packageOption, additionalOption };
    const emailSubject = `Purchase Request - ${packageOption} - ${name}`;
    const emailBody =
      `Name: ${name}\nEmail: ${email}\nPackage Selected: ${packageOption}\nAdditional Option Selected: ${additionalOption || 'None'}`;

    try {
      if (SERVICE_ID.includes('YOUR_') || TEMPLATE_ID.includes('YOUR_') || USER_ID.includes('YOUR_')) {
        await new Promise((r) => setTimeout(r, 500)); // preview-only success
        alert(t('prices.purchase.preview_ok'));
      } else {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { ...formData, subject: emailSubject, message: emailBody },
          USER_ID
        );
        alert(t('prices.purchase.sent'));
      }
      setName(''); setEmail(''); setPackageOption(''); setAdditionalOption('');
    } catch (err) {
      console.error(err);
      alert(t('prices.purchase.error'));
    }
  };

  const pkgOptions = t('prices.form.packages', { returnObjects: true });
  const addOptions = t('prices.form.addons', { returnObjects: true });

  return (
    <div className="custom-form-container" id="purchase">
      <h1 className="custom-form-title">{t('prices.form.title')}</h1>
      <p className="custom-form-description">{t('prices.form.subtitle')}</p>

      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="custom-form-row">
          <div className="custom-form-group">
            <label className="custom-form-label">{t('prices.form.name')}</label>
            <input
              className="custom-form-input"
              type="text"
              placeholder={t('prices.form.name_ph')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="custom-form-group">
            <label className="custom-form-label">{t('prices.form.email')}</label>
            <input
              className="custom-form-input"
              type="email"
              placeholder={t('prices.form.email_ph')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="custom-form-group">
            <label className="custom-form-label">{t('prices.form.choosePackage')}</label>
            <select
              className="custom-form-select"
              value={packageOption}
              onChange={(e) => setPackageOption(e.target.value)}
              required
            >
              <option value="">{t('prices.form.package_ph')}</option>
              {pkgOptions.map((o, i) => <option key={i} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          <div className="custom-form-group">
            <label className="custom-form-label">{t('prices.form.chooseAddon')}</label>
            <select
              className="custom-form-select"
              value={additionalOption}
              onChange={(e) => setAdditionalOption(e.target.value)}
            >
              <option value="">{t('prices.form.addon_ph')}</option>
              {addOptions.map((o, i) => <option key={i} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>

        <button className="custom-form-button" type="submit">
          {t('prices.cta.buy')}
        </button>
      </form>
    </div>
  );
}
