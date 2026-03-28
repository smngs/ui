import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <ToastPrimitive.Provider swipeDirection="right">{children}</ToastPrimitive.Provider>;
}

export function Toast({
  open,
  onOpenChange,
  title,
  description,
  action,
  duration = 4000,
  variant = "default",
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  variant?: "default" | "success" | "error";
}) {
  return (
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration}
      className={`smngs-toast smngs-toast-${variant}`}
    >
      <div className="smngs-toast-body">
        {title && (
          <ToastPrimitive.Title className="smngs-toast-title">{title}</ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description className="smngs-toast-description">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
      {action && (
        <ToastPrimitive.Action asChild altText="action">
          {action}
        </ToastPrimitive.Action>
      )}
      <ToastPrimitive.Close className="smngs-toast-close" aria-label="閉じる">
        ✕
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}

export function ToastViewport() {
  return <ToastPrimitive.Viewport className="smngs-toast-viewport" />;
}
