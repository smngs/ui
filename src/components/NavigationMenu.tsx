import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

export function NavigationMenu({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Root className={`smngs-nav-menu ${className}`.trim()}>
      <NavigationMenuPrimitive.List className="smngs-nav-menu-list">
        {children}
      </NavigationMenuPrimitive.List>
      <NavigationMenuPrimitive.Viewport className="smngs-nav-menu-viewport" />
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuItem({ children }: { children: React.ReactNode }) {
  return <NavigationMenuPrimitive.Item>{children}</NavigationMenuPrimitive.Item>;
}

export function NavigationMenuTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Trigger className={`smngs-nav-menu-trigger ${className}`.trim()}>
      {children}
      <span className="smngs-nav-menu-chevron" aria-hidden>
        {" "}
        ▾
      </span>
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuLink({
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
  return (
    <NavigationMenuPrimitive.Link
      asChild={asChild}
      href={href}
      className={`smngs-nav-menu-link ${className}`.trim()}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}

export function NavigationMenuContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NavigationMenuPrimitive.Content className={`smngs-nav-menu-content ${className}`.trim()}>
      {children}
    </NavigationMenuPrimitive.Content>
  );
}
