import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export function Popover({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </PopoverPrimitive.Root>
  );
}

export function PopoverTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return <PopoverPrimitive.Trigger asChild={asChild}>{children}</PopoverPrimitive.Trigger>;
}

export function PopoverContent({
  children,
  className = "",
  sideOffset = 8,
}: {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={`smngs-popover-content ${className}`.trim()}
        sideOffset={sideOffset}
      >
        <PopoverPrimitive.Arrow className="smngs-popover-arrow" />
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

export function PopoverClose({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return <PopoverPrimitive.Close asChild={asChild}>{children}</PopoverPrimitive.Close>;
}
