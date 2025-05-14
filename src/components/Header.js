// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
