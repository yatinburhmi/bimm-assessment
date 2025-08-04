import { Box, CardContent, CardProps, Card as MUICard } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import React from "react";

type BaseCardProps = {
  image?: React.ReactNode;
  cardContent?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: number;
  sx?: SxProps<Theme>;
} & Omit<CardProps, "children">;

export const BaseCard = ({
  image,
  cardContent,
  actions,
  maxWidth,
  sx,
  ...rest
}: BaseCardProps) => {
  return (
    <MUICard sx={{ maxWidth, ...sx }} {...rest} elevation={5}>
      {image && <Box>{image}</Box>}
      {cardContent && <CardContent>{cardContent}</CardContent>}
      {actions && (
        <Box px={2} pb={2}>
          {actions}
        </Box>
      )}
    </MUICard>
  );
};
