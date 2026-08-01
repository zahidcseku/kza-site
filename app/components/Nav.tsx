"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

type PageId =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "awards"
  | "clients"
  | "gallery"
  | "find";

const LINKS: { id: PageId; href: string; label: string }[] = [
  { id: "home", href: "/", label: "Home" },
  { id: "about", href: "/about", label: "About" },
  { id: "services", href: "/services", label: "Services" },
  { id: "projects", href: "/projects", label: "Projects" },
  { id: "awards", href: "/awards", label: "Awards" },
  { id: "clients", href: "/clients", label: "Clients" },
  { id: "gallery", href: "/gallery", label: "Gallery" },
  { id: "find", href: "/find-us", label: "Find Us" },
];

export function Nav({
  currentPage = "home",
  solid = false,
}: {
  currentPage?: PageId;
  solid?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${solid ? " solid" : ""}`}>
      <a href="/" className="nav-brand">
        <span className="mark">
          <Logo size={36} />
        </span>
        <span>KZA</span>
      </a>
      <nav className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            className={currentPage === l.id ? "active" : ""}
            href={l.href}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-cta">
        <span className="dot" aria-hidden />
        <span>Accepting 2026 commissions</span>
      </div>
    </header>
  );
}
