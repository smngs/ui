import React from "react";

type SkeletonVariant = "text" | "circle" | "rect";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: SkeletonVariant;
  className?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, variant = "rect", className = "", ...props }, ref) => {
    const variantClass = variant !== "rect" ? ` smngs-skeleton-${variant}` : "";
    return (
      <div
        ref={ref}
        className={`smngs-skeleton${variantClass} ${className}`.trim()}
        style={{ width, height }}
        aria-hidden="true"
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
