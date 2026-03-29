import React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

type ToggleGroupSize = "sm" | "md" | "lg";
type ToggleGroupVariant = "default" | "outline";

interface ToggleGroupSingleProps {
  type: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  size?: ToggleGroupSize;
  variant?: ToggleGroupVariant;
  children: React.ReactNode;
  className?: string;
}

interface ToggleGroupMultipleProps {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  size?: ToggleGroupSize;
  variant?: ToggleGroupVariant;
  children: React.ReactNode;
  className?: string;
}

type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

export function ToggleGroup({
  size = "md",
  variant = "default",
  className = "",
  ...props
}: ToggleGroupProps) {
  const sizeClass = size !== "md" ? ` smngs-toggle-group-${size}` : "";
  const variantClass = variant !== "default" ? ` smngs-toggle-group-${variant}` : "";
  const combinedClass = `smngs-toggle-group${sizeClass}${variantClass} ${className}`.trim();

  if (props.type === "single") {
    return (
      <ToggleGroupPrimitive.Root
        type="single"
        value={props.value}
        defaultValue={props.defaultValue}
        onValueChange={props.onValueChange}
        disabled={props.disabled}
        className={combinedClass}
      >
        {props.children}
      </ToggleGroupPrimitive.Root>
    );
  }

  return (
    <ToggleGroupPrimitive.Root
      type="multiple"
      value={props.value}
      defaultValue={props.defaultValue}
      onValueChange={props.onValueChange}
      disabled={props.disabled}
      className={combinedClass}
    >
      {props.children}
    </ToggleGroupPrimitive.Root>
  );
}

export function ToggleGroupItem({
  value,
  children,
  disabled,
  className = "",
  "aria-label": ariaLabel,
}: {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <ToggleGroupPrimitive.Item
      value={value}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`smngs-toggle-group-item ${className}`.trim()}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}
