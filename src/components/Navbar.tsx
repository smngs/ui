import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { DropdownMenuContent } from "./DropdownMenu";

export function Navbar({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <nav className={`smngs-navbar ${className}`.trim()}>{children}</nav>;
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
