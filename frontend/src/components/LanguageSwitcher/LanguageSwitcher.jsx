import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language || "en";

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute("lang", lng);
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language switcher">
      {["en", "lv", "ru"].map((lng) => (
        <button
          key={lng}
          className={`lang-btn ${current === lng ? "active" : ""}`}
          onClick={() => setLang(lng)}
          type="button"
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
