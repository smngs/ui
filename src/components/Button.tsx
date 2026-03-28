import React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = "primary" | "ghost" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = "primary", className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={`smngs-btn smngs-btn-${variant} ${className}`.trim()}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
