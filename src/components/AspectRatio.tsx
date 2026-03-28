import React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

export function AspectRatio({
  ratio = 16 / 9,
  children,
  className = "",
}: {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AspectRatioPrimitive.Root ratio={ratio} className={`smngs-aspect-ratio ${className}`.trim()}>
      {children}
    </AspectRatioPrimitive.Root>
  );
}
