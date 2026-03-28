import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label?: string;
  options: SelectOption[];
}

export function Select({
  value,
  defaultValue,
  onValueChange,
  placeholder,
  groups,
  disabled,
  className = "",
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  groups: SelectGroup[];
  disabled?: boolean;
  className?: string;
}) {
  return (
    <SelectPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectPrimitive.Trigger className={`smngs-select-trigger ${className}`.trim()}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="smngs-select-icon">▾</SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="smngs-select-content"
          position="popper"
          sideOffset={4}
        >
          <SelectPrimitive.ScrollUpButton className="smngs-select-scroll-btn">
            ▴
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>
            {groups.map((group, i) => (
              <React.Fragment key={i}>
                {i > 0 && <SelectPrimitive.Separator className="smngs-dropdown-separator" />}
                <SelectPrimitive.Group>
                  {group.label && (
                    <SelectPrimitive.Label className="smngs-dropdown-label">
                      {group.label}
                    </SelectPrimitive.Label>
                  )}
                  {group.options.map((opt) => (
                    <SelectPrimitive.Item
                      key={opt.value}
                      value={opt.value}
                      disabled={opt.disabled}
                      className="smngs-dropdown-item smngs-select-item"
                    >
                      <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                      <SelectPrimitive.ItemIndicator className="smngs-select-item-indicator">
                        ✓
                      </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Group>
              </React.Fragment>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="smngs-select-scroll-btn">
            ▾
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
