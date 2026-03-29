import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export function Progress({
  value = 0,
  max = 100,
  className = "",
}: {
  value?: number;
  max?: number;
  className?: string;
}) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);
  return (
    <ProgressPrimitive.Root
      value={value}
      max={max}
      className={`smngs-progress ${className}`.trim()}
    >
      <ProgressPrimitive.Indicator
        className="smngs-progress-indicator"
        style={{ transform: `translateX(-${100 - pct}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
