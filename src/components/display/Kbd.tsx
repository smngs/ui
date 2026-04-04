import React from "react";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <kbd ref={ref} className={`smngs-kbd ${className}`.trim()} {...props}>
        {children}
      </kbd>
    );
  }
);
Kbd.displayName = "Kbd";
