import React from "react";

/**
 * Full-bleed brand band closing the page, matching the Navbar at the top: the
 * band spans the viewport, its contents centre on --smngs-navbar-max-width.
 */
export function Footer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <footer className={`smngs-footer ${className}`.trim()}>
      <div className="smngs-footer-inner">{children}</div>
    </footer>
  );
}
