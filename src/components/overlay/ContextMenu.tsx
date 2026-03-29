import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

export function ContextMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContextMenuPrimitive.Root>{children}</ContextMenuPrimitive.Root>;
}

export function ContextMenuTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Trigger asChild={asChild}>
      {children}
    </ContextMenuPrimitive.Trigger>
  );
}

export function ContextMenuContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={`smngs-context-menu-content ${className}`.trim()}
      >
        {children}
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
}

export function ContextMenuItem({
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
    <ContextMenuPrimitive.Item
      className={`smngs-context-menu-item ${className}`.trim()}
      onSelect={onSelect}
      disabled={disabled}
    >
      {children}
    </ContextMenuPrimitive.Item>
  );
}

export function ContextMenuSeparator() {
  return <ContextMenuPrimitive.Separator className="smngs-context-menu-separator" />;
}

export function ContextMenuLabel({ children }: { children: React.ReactNode }) {
  return (
    <ContextMenuPrimitive.Label className="smngs-context-menu-label">
      {children}
    </ContextMenuPrimitive.Label>
  );
}

export function ContextMenuSub({ children }: { children: React.ReactNode }) {
  return <ContextMenuPrimitive.Sub>{children}</ContextMenuPrimitive.Sub>;
}

export function ContextMenuSubTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      className={`smngs-context-menu-item smngs-context-menu-sub-trigger ${className}`.trim()}
    >
      {children}
      <span className="smngs-context-menu-sub-arrow">▶</span>
    </ContextMenuPrimitive.SubTrigger>
  );
}

export function ContextMenuSubContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.SubContent
        className={`smngs-context-menu-content ${className}`.trim()}
        sideOffset={2}
        alignOffset={-4}
      >
        {children}
      </ContextMenuPrimitive.SubContent>
    </ContextMenuPrimitive.Portal>
  );
}
