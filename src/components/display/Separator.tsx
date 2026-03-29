import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Separator({ orientation = "horizontal", className = "" }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={`smngs-separator ${className}`.trim()}
      orientation={orientation}
      decorative
    />
  );
}
