import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export function DropdownMenu({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DropdownMenuPrimitive.Root>
  );
}

export function DropdownMenuTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Trigger asChild={asChild}>{children}</DropdownMenuPrimitive.Trigger>
  );
}

export function DropdownMenuContent({
  children,
  className = "",
  sideOffset = 6,
}: {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={`smngs-dropdown-content ${className}`.trim()}
        sideOffset={sideOffset}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuItem({
  children,
  onSelect,
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <DropdownMenuPrimitive.Item
      className={`smngs-dropdown-item ${className}`.trim()}
      onSelect={onSelect}
      disabled={disabled}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

export function DropdownMenuSeparator() {
  return <DropdownMenuPrimitive.Separator className="smngs-dropdown-separator" />;
}

export function DropdownMenuLabel({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuPrimitive.Label className="smngs-dropdown-label">{children}</DropdownMenuPrimitive.Label>
  );
}
