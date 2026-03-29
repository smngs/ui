import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  id,
  className = "",
}: {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <SwitchPrimitive.Root
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={`smngs-switch ${className}`.trim()}
    >
      <SwitchPrimitive.Thumb className="smngs-switch-thumb" />
    </SwitchPrimitive.Root>
  );
}
