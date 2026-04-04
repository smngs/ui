import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DrawerSide = "left" | "right";

interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Drawer({ open, onOpenChange, children }: DrawerProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

export function DrawerTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  return <DialogPrimitive.Trigger asChild={asChild}>{children}</DialogPrimitive.Trigger>;
}

export function DrawerContent({
  children,
  title,
  description,
  side = "right",
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  side?: DrawerSide;
  className?: string;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="smngs-drawer-overlay" />
      <DialogPrimitive.Content
        className={`smngs-drawer-content smngs-drawer-content-${side} ${className}`.trim()}
      >
        {title && (
          <DialogPrimitive.Title className="smngs-drawer-title">{title}</DialogPrimitive.Title>
        )}
        {description && (
          <DialogPrimitive.Description className="smngs-drawer-description">
            {description}
          </DialogPrimitive.Description>
        )}
        {children}
        <DialogPrimitive.Close className="smngs-drawer-close" aria-label="閉じる">
          ✕
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DrawerClose({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  return <DialogPrimitive.Close asChild={asChild}>{children}</DialogPrimitive.Close>;
}
