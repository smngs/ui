import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

export function DialogTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  return <DialogPrimitive.Trigger asChild={asChild}>{children}</DialogPrimitive.Trigger>;
}

export function DialogContent({
  children,
  title,
  description,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="smngs-dialog-overlay" />
      <DialogPrimitive.Content className={`smngs-dialog-content ${className}`.trim()}>
        {title && (
          <DialogPrimitive.Title className="smngs-dialog-title">{title}</DialogPrimitive.Title>
        )}
        {description && (
          <DialogPrimitive.Description className="smngs-dialog-description">
            {description}
          </DialogPrimitive.Description>
        )}
        {children}
        <DialogPrimitive.Close className="smngs-dialog-close" aria-label="閉じる">
          ✕
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogClose({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  return <DialogPrimitive.Close asChild={asChild}>{children}</DialogPrimitive.Close>;
}
