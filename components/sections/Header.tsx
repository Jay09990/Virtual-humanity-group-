"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company, copy, navItems } from "@/lib/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ).filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="header-shell">
      <Container className="header-inner">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          {company.name}
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) =>
            item.href ? (
              <a className="nav-link" href={item.href} key={item.label}>
                {item.label}
              </a>
            ) : (
              <span className="nav-link" aria-disabled="true" key={item.label}>
                {item.label}
              </span>
            ),
          )}
        </nav>
        <Button
          className="header-cta"
          href="#contact"
          variant="dark"
        >
          {copy.primaryCta}
        </Button>
        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-toggle lg:hidden"
          aria-label={menuOpen ? copy.headerMenuClose : copy.headerMenuOpen}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>
      {menuOpen && (
        <div
          className="mobile-menu"
          id="mobile-navigation"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav aria-label="Main navigation">
            {navItems.map((item) =>
              item.href ? (
                <a
                  className="nav-link"
                  href={item.href}
                  key={item.label}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : (
                <span className="nav-link" aria-disabled="true" key={item.label}>
                  {item.label}
                </span>
              ),
            )}
            <Button href="#contact" variant="dark" onClick={closeMenu}>
              {copy.primaryCta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
