import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type TabsSize = "sm" | "md" | "lg";

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  size = "md",
  children,
  className = "",
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  size?: TabsSize;
  children: React.ReactNode;
  className?: string;
}) {
  const sizeClass = size !== "md" ? ` smngs-tabs-${size}` : "";
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={`smngs-tabs${sizeClass} ${className}`.trim()}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabsPrimitive.List className={`smngs-tabs-list ${className}`.trim()}>
      {children}
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabsPrimitive.Trigger value={value} className={`smngs-tabs-trigger ${className}`.trim()}>
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabsPrimitive.Content value={value} className={`smngs-tabs-content ${className}`.trim()}>
      {children}
    </TabsPrimitive.Content>
  );
}
