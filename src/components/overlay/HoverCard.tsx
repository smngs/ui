import React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export function HoverCard({
  children,
  openDelay = 300,
  closeDelay = 200,
}: {
  children: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
}) {
  return (
    <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={closeDelay}>
      {children}
    </HoverCardPrimitive.Root>
  );
}

export function HoverCardTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return <HoverCardPrimitive.Trigger asChild={asChild}>{children}</HoverCardPrimitive.Trigger>;
}

export function HoverCardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        className={`smngs-popover-content ${className}`.trim()}
        sideOffset={8}
      >
        <HoverCardPrimitive.Arrow className="smngs-popover-arrow" />
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
}
