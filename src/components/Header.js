"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    setTheme(document.documentElement.dataset.theme || "light");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("gqim-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand header-brand" href="/#accueil" onClick={close} aria-label="GQIM — Accueil">
          <span className="header-logo">
            <Image
              className="header-logo-image"
              src="/logo.png"
              alt="GQIM"
              width={338}
              height={225}
              priority
            />
          </span>
        </a>

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>

        <nav className={open ? "is-open" : ""} aria-label="Navigation principale">
          <a href="/#services" onClick={close}>Services</a>
          <a href="/#realisations" onClick={close}>Réalisations</a>
          <a href="/#expertise" onClick={close}>Expertise</a>
          <a href="/methode" onClick={close}>Méthode</a>
          <a href="/#apropos" onClick={close}>À propos</a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
            title={theme === "dark" ? "Thème clair" : "Thème sombre"}
          >
            <svg className="sun-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3.5" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 15.2A8.3 8.3 0 0 1 8.8 4a8.3 8.3 0 1 0 11.2 11.2Z" />
            </svg>
          </button>
          <a className="header-cta" href="/#contact">
            Parlons de votre projet
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h11M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
