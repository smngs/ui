import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Avatar, ToastProvider, ToastViewport, Toc } from "@smngs/ui";
import { HomePage } from "./pages/HomePage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { DemoPage } from "./pages/DemoPage";

function AppContent({ isDark, setIsDark }: {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="layout">
      <Toc container=".page" refreshKey={location.pathname} />
      <div className="page">
        <div className="nav-spacer" aria-hidden="true" />
        <nav className="site-nav">
          <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <Avatar src="https://github.com/smngs.png" fallback="SM" size="sm" />
            <span className="nav-title">@smngs/ui</span>
          </Link>
          <div className="nav-right">
            <div className="nav-links">
              <NavLink to="/components">Components</NavLink>
              <NavLink to="/demo">Demo</NavLink>
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
              <NavLink to="/components" onClick={() => setMenuOpen(false)}>Components</NavLink>
              <NavLink to="/demo" onClick={() => setMenuOpen(false)}>Demo</NavLink>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage isDark={isDark} />} />
          <Route path="/components" element={<ComponentsPage isDark={isDark} />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </div>
      <ToastViewport />
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

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

  return (
    <HashRouter>
      <ToastProvider>
        <AppContent isDark={isDark} setIsDark={setIsDark} />
      </ToastProvider>
    </HashRouter>
  );
}
