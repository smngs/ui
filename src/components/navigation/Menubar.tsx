import React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";

export function Menubar({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MenubarPrimitive.Root className={`smngs-menubar ${className}`.trim()}>
      {children}
    </MenubarPrimitive.Root>
  );
}

export function MenubarMenu({ children }: { children: React.ReactNode }) {
  return <MenubarPrimitive.Menu>{children}</MenubarPrimitive.Menu>;
}

export function MenubarTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MenubarPrimitive.Trigger
      className={`smngs-menubar-trigger ${className}`.trim()}
    >
      {children}
    </MenubarPrimitive.Trigger>
  );
}

export function MenubarContent({
  children,
  className = "",
  align = "start",
  sideOffset = 6,
}: {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        className={`smngs-menubar-content ${className}`.trim()}
        align={align}
        sideOffset={sideOffset}
      >
        {children}
      </MenubarPrimitive.Content>
    </MenubarPrimitive.Portal>
  );
}

export function MenubarItem({
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
    <MenubarPrimitive.Item
      className={`smngs-menubar-item ${className}`.trim()}
      onSelect={onSelect}
      disabled={disabled}
    >
      {children}
    </MenubarPrimitive.Item>
  );
}

export function MenubarSeparator() {
  return <MenubarPrimitive.Separator className="smngs-menubar-separator" />;
}

export function MenubarLabel({ children }: { children: React.ReactNode }) {
  return (
    <MenubarPrimitive.Label className="smngs-menubar-label">
      {children}
    </MenubarPrimitive.Label>
  );
}

export function MenubarSub({ children }: { children: React.ReactNode }) {
  return <MenubarPrimitive.Sub>{children}</MenubarPrimitive.Sub>;
}

export function MenubarSubTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MenubarPrimitive.SubTrigger
      className={`smngs-menubar-item smngs-menubar-sub-trigger ${className}`.trim()}
    >
      {children}
      <span className="smngs-menubar-sub-arrow">▶</span>
    </MenubarPrimitive.SubTrigger>
  );
}

export function MenubarSubContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        className={`smngs-menubar-content ${className}`.trim()}
        sideOffset={2}
        alignOffset={-4}
      >
        {children}
      </MenubarPrimitive.SubContent>
    </MenubarPrimitive.Portal>
  );
}
