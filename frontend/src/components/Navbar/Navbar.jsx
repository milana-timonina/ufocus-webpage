import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="U-Focus" className="brand-logo" />
      </Link>

      <nav className={`navbar-menu ${open ? "open" : ""}`}>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>{t("nav.about")}</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>{t("nav.services")}</NavLink>
        <NavLink to="/prices" className={({isActive}) => isActive ? "active" : ""}>{t("nav.prices")}</NavLink>
        <NavLink to="/contacts" className={({isActive}) => isActive ? "active" : ""}>{t("nav.contacts")}</NavLink>
        <LanguageSwitcher />
      </nav>

      {open && <button className="nav-overlay" aria-label="Close menu" onClick={() => setOpen(false)} />}

      <button
        className={`hamburger ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span/><span/><span/>
      </button>
    </header>
  );
}
