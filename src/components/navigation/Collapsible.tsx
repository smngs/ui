import React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

export function Collapsible({
  open,
  defaultOpen,
  onOpenChange,
  children,
  className = "",
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CollapsiblePrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      className={`smngs-collapsible ${className}`.trim()}
    >
      {children}
    </CollapsiblePrimitive.Root>
  );
}

export function CollapsibleTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <CollapsiblePrimitive.Trigger asChild={asChild}>{children}</CollapsiblePrimitive.Trigger>
  );
}

export function CollapsibleContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CollapsiblePrimitive.Content className={`smngs-collapsible-content ${className}`.trim()}>
      {children}
    </CollapsiblePrimitive.Content>
  );
}
