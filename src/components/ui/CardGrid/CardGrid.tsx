import { Grid as MUIGrid } from "@mui/material";
import { Children, isValidElement } from "react";

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
 * CardGrid is a shared layout component for rendering children in a responsive MUI Grid.
 *
 * Supports configurable spacing, padding, and column count per breakpoint.
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
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <MUIGrid
            key={child.key}
            size={{
              xs: columns.xs ? 12 / columns.xs : undefined,
              sm: columns.sm ? 12 / columns.sm : undefined,
              md: columns.md ? 12 / columns.md : undefined,
              lg: columns.lg ? 12 / columns.lg : undefined,
            }}
          >
            {child}
          </MUIGrid>
        ) : null
      )}
    </MUIGrid>
  );
};

export default CardGrid;
