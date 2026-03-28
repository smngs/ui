import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

export function Slider({
  value,
  defaultValue,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  className = "",
}: {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}) {
  const thumbCount = (value ?? defaultValue ?? [0]).length;
  return (
    <SliderPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={`smngs-slider ${className}`.trim()}
    >
      <SliderPrimitive.Track className="smngs-slider-track">
        <SliderPrimitive.Range className="smngs-slider-range" />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }).map((_, i) => (
        <SliderPrimitive.Thumb key={i} className="smngs-slider-thumb" aria-label={`値 ${i + 1}`} />
      ))}
    </SliderPrimitive.Root>
  );
}
