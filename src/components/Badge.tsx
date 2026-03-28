import React from "react";
import { Slot } from "@radix-ui/react-slot";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ asChild = false, className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={ref}
        className={`smngs-badge ${className}`.trim()}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
