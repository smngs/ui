import React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

export function Toolbar({
  children,
  className = "",
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <ToolbarPrimitive.Root
      className={`smngs-toolbar ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </ToolbarPrimitive.Root>
  );
}

export function ToolbarButton({
  children,
  disabled,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <ToolbarPrimitive.Button
      className={`smngs-toolbar-button ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </ToolbarPrimitive.Button>
  );
}

export function ToolbarSeparator({ className = "" }: { className?: string }) {
  return (
    <ToolbarPrimitive.Separator
      className={`smngs-toolbar-separator ${className}`.trim()}
    />
  );
}

export function ToolbarToggleGroup({
  type,
  value,
  defaultValue,
  onValueChange,
  children,
  className = "",
}: (
  | { type: "single"; value?: string; defaultValue?: string; onValueChange?: (value: string) => void }
  | { type: "multiple"; value?: string[]; defaultValue?: string[]; onValueChange?: (value: string[]) => void }
) & {
  children: React.ReactNode;
  className?: string;
}) {
  if (type === "single") {
    return (
      <ToolbarPrimitive.ToggleGroup
        type="single"
        value={value as string}
        defaultValue={defaultValue as string}
        onValueChange={onValueChange as (value: string) => void}
        className={`smngs-toolbar-toggle-group ${className}`.trim()}
      >
        {children}
      </ToolbarPrimitive.ToggleGroup>
    );
  }
  return (
    <ToolbarPrimitive.ToggleGroup
      type="multiple"
      value={value as string[]}
      defaultValue={defaultValue as string[]}
      onValueChange={onValueChange as (value: string[]) => void}
      className={`smngs-toolbar-toggle-group ${className}`.trim()}
    >
      {children}
    </ToolbarPrimitive.ToggleGroup>
  );
}

export function ToolbarToggleItem({
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
    <ToolbarPrimitive.ToggleItem
      value={value}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`smngs-toolbar-button ${className}`.trim()}
    >
      {children}
    </ToolbarPrimitive.ToggleItem>
  );
}

export function ToolbarSpacer() {
  return <div style={{ flex: 1 }} />;
}

export function ToolbarLink({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <ToolbarPrimitive.Link
      href={href}
      className={`smngs-toolbar-link ${className}`.trim()}
    >
      {children}
    </ToolbarPrimitive.Link>
  );
}
