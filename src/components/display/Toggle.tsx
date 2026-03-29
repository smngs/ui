import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

type ToggleSize = "sm" | "md" | "lg";
type ToggleVariant = "default" | "outline";

interface ToggleProps {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  size?: ToggleSize;
  variant?: ToggleVariant;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function Toggle({
  pressed,
  defaultPressed,
  onPressedChange,
  disabled,
  size = "md",
  variant = "default",
  children,
  className = "",
  "aria-label": ariaLabel,
}: ToggleProps) {
  const sizeClass = size !== "md" ? ` smngs-toggle-${size}` : "";
  const variantClass = variant !== "default" ? ` smngs-toggle-${variant}` : "";
  return (
    <TogglePrimitive.Root
      pressed={pressed}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`smngs-toggle${sizeClass}${variantClass} ${className}`.trim()}
    >
      {children}
    </TogglePrimitive.Root>
  );
}
