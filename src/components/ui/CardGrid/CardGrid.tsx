import { Grid as MUIGrid } from "@mui/material";
import { Children } from "react";

type Breakpoints = "xs" | "sm" | "md" | "lg";

type CardGridProps = {
  spacing?: number;
  paddingX?: number;
  paddingY?: number;
  component?: React.ElementType;
  columns?: Partial<Record<Breakpoints, number>>;
  children: React.ReactNode;
};

/**
 * This is a shared layout component to render items in a responsive grid.
 * It accepts columns prop to determine how many items to display per row.
 *
 * Usage:
 * - Wrap domain-specific card components inside <CardGrid> </CardGrid>
 * - Define `columns` prop as {xs: 1, sm:1 , md:2, lg:3 } to control layout density.
 */

const CardGrid = ({
  spacing = 2,
  paddingX = 0,
  paddingY = 0,
  component = "div",
  columns = { xs: 1, sm: 1, md: 2, lg: 4 },
  children,
}: CardGridProps) => {
  return (
    <MUIGrid
      container
      component={component}
      spacing={spacing}
      px={paddingX}
      py={paddingY}
    >
      {Children.map(children, (child) => (
        <MUIGrid
          key={(child as any)?.key || undefined}
          size={{
            xs: columns.xs ? 12 / columns.xs : undefined,
            sm: columns.sm ? 12 / columns.sm : undefined,
            md: columns.md ? 12 / columns.md : undefined,
            lg: columns.lg ? 12 / columns.lg : undefined,
          }}
        >
          {child}
        </MUIGrid>
      ))}
    </MUIGrid>
  );
};

export default CardGrid;
