"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "@/app/assets/logo.png";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close drawer on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`nav${scrolled ? " scrolled" : ""}${solid ? " solid" : ""}`}
      >
        <a href="/" className="nav-brand" aria-label="KZA — Khan Zahid Architects">
          <Image
            src={logoImg}
            alt="KZA — Khan Zahid Architects"
            width={logoImg.width}
            height={logoImg.height}
            priority
            className="nav-logo"
          />
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={currentPage === l.id ? "active" : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
          <span>Menu</span>
        </button>
      </header>

      {open && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="nav-drawer-head">
            <span className="nav-drawer-label">§ Index</span>
            <button
              className="nav-drawer-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close ×
            </button>
          </div>

          <nav className="nav-drawer-list">
            {LINKS.map((l, i) => (
              <a
                key={l.id}
                href={l.href}
                className={currentPage === l.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav-drawer-foot">
            <div className="nav-drawer-contact">
              kzarchi@gmail.com · +880 1712 753 160
            </div>
            <div className="nav-drawer-status">
              <span className="dot" aria-hidden />
              Accepting 2026 commissions
            </div>
          </div>
        </div>
      )}
    </>
  );
}
