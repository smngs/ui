import React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = "primary" | "ghost" | "danger" | "nav" | "nav-active";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = "primary", size = "md", className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const sizeClass = size !== "md" ? ` smngs-btn-${size}` : "";
    return (
      <Comp
        ref={ref}
        className={`smngs-btn smngs-btn-${variant}${sizeClass} ${className}`.trim()}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
