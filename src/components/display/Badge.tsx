import React from "react";
import { Slot } from "@radix-ui/react-slot";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
  size?: BadgeSize;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ asChild = false, size = "md", className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    const sizeClass = size !== "md" ? ` smngs-badge-${size}` : "";
    return (
      <Comp
        ref={ref}
        className={`smngs-badge${sizeClass} ${className}`.trim()}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
