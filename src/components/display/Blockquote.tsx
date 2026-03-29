import React from "react";

type BlockquoteVariant = "default" | "info" | "success" | "warning" | "danger";

interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  variant?: BlockquoteVariant;
}

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ variant = "default", className = "", ...props }, ref) => {
    const variantClass = variant !== "default" ? `smngs-blockquote-${variant}` : "";
    return (
      <blockquote
        ref={ref}
        className={`${variantClass} ${className}`.trim() || undefined}
        {...props}
      />
    );
  }
);
Blockquote.displayName = "Blockquote";
