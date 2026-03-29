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
