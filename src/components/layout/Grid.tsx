import React from "react";
import { Slot } from "@radix-ui/react-slot";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | "auto";
  gap?: "none" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "stretch";
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | "full";
  rowSpan?: 1 | 2 | 3 | 4;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      asChild = false,
      columns = "auto",
      gap = "md",
      align,
      justify,
      className = "",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const classes = [
      "smngs-grid",
      `smngs-grid-cols-${columns}`,
      `smngs-grid-gap-${gap}`,
      align ? `smngs-grid-align-${align}` : "",
      justify ? `smngs-grid-justify-${justify}` : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <Comp ref={ref} className={classes} {...props} />;
  }
);
Grid.displayName = "Grid";

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ asChild = false, colSpan, rowSpan, className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    const classes = [
      "smngs-grid-item",
      colSpan ? `smngs-col-span-${colSpan}` : "",
      rowSpan ? `smngs-row-span-${rowSpan}` : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <Comp ref={ref} className={classes} {...props} />;
  }
);
GridItem.displayName = "GridItem";
