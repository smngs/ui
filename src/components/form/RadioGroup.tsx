import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  children,
  className = "",
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RadioGroupPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={`smngs-radio-group ${className}`.trim()}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem({
  value,
  id,
  className = "",
}: {
  value: string;
  id?: string;
  className?: string;
}) {
  return (
    <RadioGroupPrimitive.Item
      value={value}
      id={id}
      className={`smngs-radio-item ${className}`.trim()}
    >
      <RadioGroupPrimitive.Indicator className="smngs-radio-indicator" />
    </RadioGroupPrimitive.Item>
  );
}
