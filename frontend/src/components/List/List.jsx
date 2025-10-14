import React from 'react';
import './List.css';
import { useTranslation } from 'react-i18next';

export default function List() {
  const { t } = useTranslation();
  const items = t('prices.list', { returnObjects: true });

  return (
    <div className="services-container">
      <ul>
        {items.map((it, i) => (
          <li key={i}>
            {it.label} <strong>{it.price}</strong>{it.tail ? <> {it.tail}</> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
