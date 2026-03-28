import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

interface AlertDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function AlertDialog({ open, onOpenChange, children }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </AlertDialogPrimitive.Root>
  );
}

export function AlertDialogTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <AlertDialogPrimitive.Trigger asChild={asChild}>{children}</AlertDialogPrimitive.Trigger>
  );
}

export function AlertDialogContent({
  title,
  description,
  cancelLabel = "キャンセル",
  actionLabel = "確認",
  onAction,
  onCancel,
}: {
  title: string;
  description?: string;
  cancelLabel?: string;
  actionLabel?: string;
  onAction?: () => void;
  onCancel?: () => void;
}) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="smngs-dialog-overlay" />
      <AlertDialogPrimitive.Content className="smngs-dialog-content">
        <AlertDialogPrimitive.Title className="smngs-dialog-title">{title}</AlertDialogPrimitive.Title>
        {description && (
          <AlertDialogPrimitive.Description className="smngs-dialog-description">
            {description}
          </AlertDialogPrimitive.Description>
        )}
        <div className="smngs-alert-dialog-actions">
          <AlertDialogPrimitive.Cancel asChild>
            <button className="smngs-btn smngs-btn-ghost" onClick={onCancel}>
              {cancelLabel}
            </button>
          </AlertDialogPrimitive.Cancel>
          <AlertDialogPrimitive.Action asChild>
            <button className="smngs-btn smngs-btn-danger" onClick={onAction}>
              {actionLabel}
            </button>
          </AlertDialogPrimitive.Action>
        </div>
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
}
