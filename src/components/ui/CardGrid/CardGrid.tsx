import { Grid as MUIGrid } from "@mui/material";
import React from "react";

type Breakpoints = "xs" | "sm" | "md" | "lg";

type CardGridProps = {
  spacing?: number;
  component?: React.ElementType;
  columns?: Partial<Record<Breakpoints, number>>;
  children: React.ReactNode;
};

const CardGrid = ({
  spacing = 2,
  component = "div",
  columns = { xs: 1, sm: 1, md: 2, lg: 3 },
  children,
}: CardGridProps) => {
  return (
    <MUIGrid
      container
      component={component}
      columns={columns}
      spacing={spacing}
    >
      {React.Children.map(children, (child) => (
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
