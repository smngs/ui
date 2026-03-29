import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark, faCube } from "@fortawesome/free-solid-svg-icons";
import { faReact, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { Avatar, Badge, ToastProvider, ToastViewport } from "@smngs/ui";

import { Toc, TOC_ITEMS } from "./Toc";
import { ColorPaletteSection } from "./sections/ColorPaletteSection";
import { TypographySection } from "./sections/TypographySection";
import { DisplaySection } from "./sections/DisplaySection";
import { OverlaySection } from "./sections/OverlaySection";
import { NavigationSection } from "./sections/NavigationSection";
import { FormSection } from "./sections/FormSection";
import { FeedbackSection } from "./sections/FeedbackSection";
import { LayoutSection } from "./sections/LayoutSection";

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const suppressObserver = React.useRef(false);
  const suppressTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    suppressObserver.current = false;
    const checkActive = () => {
      if (suppressObserver.current) return;
      const elements = TOC_ITEMS
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      const threshold = 80; // scroll-margin-top(6rem=60px) + buffer
      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= threshold) {
          current = el.id;
        }
      }
      // ページ先頭では最初に見えている要素をアクティブにする
      if (!current) {
        const first = elements.find(el => el.getBoundingClientRect().top < window.innerHeight);
        if (first) current = first.id;
      }
      if (current) setActiveId(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        checkActive();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ToastProvider>
      <div className="layout">
        <Toc activeId={activeId} onSelect={(id) => {
          setActiveId(id);
          suppressObserver.current = true;
          if (suppressTimer.current) clearTimeout(suppressTimer.current);

          const liftSuppress = () => { suppressObserver.current = false; };
          window.addEventListener("scrollend", liftSuppress, { once: true });
          suppressTimer.current = setTimeout(() => {
            window.removeEventListener("scrollend", liftSuppress);
            suppressObserver.current = false;
          }, 700);
        }} />

        <div className="page">
          {/* Navbar */}
          <div className="nav-spacer" aria-hidden="true" />
          <nav className="site-nav">
            <Avatar src="https://github.com/smngs.png" fallback="SM" size="sm" />
            <a
              href="https://github.com/smngs/ui"
              target="_blank"
              rel="noreferrer"
              className="nav-title"
            >
              @smngs/ui
            </a>
            <div className="nav-right">
              <div className="nav-links">
                <a href="#color-palette">Color Palette</a>
                <a href="#typography">Typography</a>
                <a href="#components">Components</a>
              </div>
              <button
                className="theme-toggle"
                onClick={() => setIsDark((d) => !d)}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
              </button>
              <button
                className="hamburger"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
              </button>
            </div>
            {menuOpen && (
              <div className="nav-mobile-menu">
                <a href="#color-palette" onClick={() => setMenuOpen(false)}>Color Palette</a>
                <a href="#typography" onClick={() => setMenuOpen(false)}>Typography</a>
                <a href="#components" onClick={() => setMenuOpen(false)}>Components</a>
              </div>
            )}
          </nav>

          {/* Hero */}
          <div className="hero">
            <div className="hero-text">
              <h1>@smngs/ui</h1>
              <p>A Radix UI-based design system — 25 components</p>
              <div className="row">
                <Badge asChild><a href="https://radix-ui.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCube} /> Radix UI</a></Badge>
                <Badge asChild><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTypescript} /> TypeScript</a></Badge>
                <Badge asChild><a href="https://react.dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faReact} /> React 18</a></Badge>
              </div>
            </div>
            <Avatar src="https://github.com/smngs.png" fallback="SM" size="lg" />
          </div>

          <ColorPaletteSection isDark={isDark} />
          <TypographySection />

          {/* ===== Components ===== */}
          <div className="section" id="components">
            <h1>Components</h1>
          </div>

          <DisplaySection isDark={isDark} />
          <OverlaySection isDark={isDark} />
          <NavigationSection isDark={isDark} />
          <FormSection isDark={isDark} />
          <FeedbackSection isDark={isDark} />
          <LayoutSection isDark={isDark} />
        </div>
      </div>
      <ToastViewport />
    </ToastProvider>
  );
}
