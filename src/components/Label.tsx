import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { className?: string }
>(({ className = "", ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`smngs-label ${className}`.trim()}
    {...props}
  />
));
Label.displayName = "Label";
