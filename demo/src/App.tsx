import { HashRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import {
  Badge,
  Button,
  Navbar,
  NavbarHeader,
  NavbarHamburger,
  NavbarLinks,
  NavbarMobileMenu,
  NavbarRight,
  NavbarThemeToggle,
  NavbarTitle,
  ThemeProvider,
  ToastProvider,
  ToastViewport,
  Toc,
  useTheme,
} from "@smngs/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faReact, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { HomePage } from "./pages/HomePage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { DemoPage } from "./pages/DemoPage";

const AVATAR = { src: "https://github.com/smngs.png", alt: "@smngs", href: "#/" };

function Hero() {
  return (
    <>
      <h1>@smngs/ui</h1>
      <p>A Radix UI-based design system — 36 components</p>
      <div className="row">
        <Badge asChild><a href="https://radix-ui.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCube} /> Radix UI</a></Badge>
        <Badge asChild><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTypescript} /> TypeScript</a></Badge>
        <Badge asChild><a href="https://react.dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faReact} /> React 18</a></Badge>
      </div>
    </>
  );
}

function AppContent() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navContents = (
    <>
      <NavbarTitle asChild>
        <Link to="/">@smngs/ui</Link>
      </NavbarTitle>
      <NavbarRight>
        <NavbarLinks>
          {/* Bare anchors inherit the link colour, which is the brand colour the
              bar is painted in — use the nav button variants instead. */}
          <Button variant={location.pathname === "/components" ? "nav-active" : "nav"} asChild>
            <Link to="/components">Components</Link>
          </Button>
          <Button variant={location.pathname === "/demo" ? "nav-active" : "nav"} asChild>
            <Link to="/demo">Demo</Link>
          </Button>
        </NavbarLinks>
        <NavbarThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <NavbarHamburger />
      </NavbarRight>
      <NavbarMobileMenu>
        <NavLink to="/components">Components</NavLink>
        <NavLink to="/demo">Demo</NavLink>
      </NavbarMobileMenu>
    </>
  );

  return (
    <div className="smngs-layout">
      {isHome ? (
        <NavbarHeader avatar={AVATAR} hero={<Hero />}>
          {navContents}
        </NavbarHeader>
      ) : (
        <Navbar>
          <a href="#/" className="smngs-navbar-brand">
            <img className="smngs-navbar-avatar" src={AVATAR.src} alt={AVATAR.alt} />
          </a>
          {navContents}
        </Navbar>
      )}
      <Toc container=".page" refreshKey={location.pathname} />
      <div className="page">

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
  return (
    <HashRouter>
      <ThemeProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </ThemeProvider>
    </HashRouter>
  );
}
