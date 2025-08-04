import { Box, CardContent, CardProps, Card as MUICard } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import React from "react";

type BaseCardProps = {
  image?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: number;
  sx?: SxProps<Theme>;
} & Omit<CardProps, "children">;

export const BaseCard = ({
  image,
  content,
  actions,
  maxWidth = 350,
  sx,
  ...rest
}: BaseCardProps) => {
  return (
    <MUICard sx={{ maxWidth, ...sx }} {...rest}>
      {image && <Box>{image}</Box>}
      {content && <CardContent>{content}</CardContent>}
      {actions && (
        <Box px={2} pb={2}>
          {actions}
        </Box>
      )}
    </MUICard>
  );
};
