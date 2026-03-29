import React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export function ScrollArea({
  children,
  height = "20rem",
  className = "",
  style,
}: {
  children: React.ReactNode;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <ScrollAreaPrimitive.Root
      className={`smngs-scroll-area ${className}`.trim()}
      style={{ height, ...style }}
    >
      <ScrollAreaPrimitive.Viewport className="smngs-scroll-area-viewport">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className="smngs-scroll-area-scrollbar"
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb className="smngs-scroll-area-thumb" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        className="smngs-scroll-area-scrollbar"
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb className="smngs-scroll-area-thumb" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
