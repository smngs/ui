import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

type AccordionRootProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

export function Accordion({ className = "", ...props }: AccordionRootProps & { className?: string }) {
  return (
    <AccordionPrimitive.Root
      className={`smngs-accordion ${className}`.trim()}
      {...(props as AccordionRootProps)}
    />
  );
}

export function AccordionItem({
  value,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { className?: string }) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={`smngs-accordion-item ${className}`.trim()}
      {...props}
    />
  );
}

export function AccordionTrigger({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { className?: string }) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={`smngs-accordion-trigger ${className}`.trim()}
        {...props}
      >
        {children}
        <span className="smngs-accordion-chevron" aria-hidden>
          ▾
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { className?: string }) {
  return (
    <AccordionPrimitive.Content
      className={`smngs-accordion-content ${className}`.trim()}
      {...props}
    >
      <div className="smngs-accordion-content-inner">{children}</div>
    </AccordionPrimitive.Content>
  );
}
