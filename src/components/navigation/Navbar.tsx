import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { DropdownMenuContent } from "./DropdownMenu";

type NavbarContextValue = {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarContext = React.createContext<NavbarContextValue>({
  mobileOpen: false,
  setMobileOpen: () => {},
});

export function useNavbarContext() {
  return React.useContext(NavbarContext);
}

export function Navbar({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <NavbarContext.Provider value={{ mobileOpen, setMobileOpen }}>
      <nav className={`smngs-navbar ${className}`.trim()}>{children}</nav>
    </NavbarContext.Provider>
  );
}

export function NavbarTitle({
  children,
  href,
  asChild,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  asChild?: boolean;
  className?: string;
}) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp href={href} className={`smngs-navbar-title ${className}`.trim()}>
      {children}
    </Comp>
  );
}

export function NavbarLinks({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`smngs-navbar-links ${className}`.trim()}>{children}</div>;
}

export function NavbarRight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`smngs-navbar-right ${className}`.trim()}>{children}</div>;
}

export function NavbarHamburger({ className = "" }: { className?: string }) {
  const { mobileOpen, setMobileOpen } = useNavbarContext();
  return (
    <button
      className={`smngs-navbar-hamburger ${className}`.trim()}
      onClick={() => setMobileOpen((o) => !o)}
      aria-label={mobileOpen ? "Close menu" : "Open menu"}
      aria-expanded={mobileOpen}
    >
      {mobileOpen ? (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )}
    </button>
  );
}

export function NavbarMobileMenu({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { mobileOpen } = useNavbarContext();
  if (!mobileOpen) return null;
  return (
    <div className={`smngs-navbar-mobile-menu ${className}`.trim()}>{children}</div>
  );
}

export function NavbarThemeToggle({
  isDark,
  onToggle,
  className = "",
  lightIcon,
  darkIcon,
}: {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
  lightIcon?: React.ReactNode;
  darkIcon?: React.ReactNode;
}) {
  const defaultLight = (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
  const defaultDark = (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <button
      className={`smngs-navbar-theme-toggle ${className}`.trim()}
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (lightIcon ?? defaultLight) : (darkIcon ?? defaultDark)}
    </button>
  );
}

export function NavbarDropdownContent({
  children,
  className = "",
  sideOffset,
}: {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  return (
    <DropdownMenuContent
      className={`smngs-navbar-dropdown ${className}`.trim()}
      sideOffset={sideOffset}
    >
      {children}
    </DropdownMenuContent>
  );
}
