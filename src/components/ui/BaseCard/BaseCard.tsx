import {
  Box as MUIBox,
  CardContent as MUICardContent,
  CardProps,
  Card as MUICard,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type BaseCardProps = {
  image?: React.ReactNode;
  cardContent?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: number;
  sx?: SxProps<Theme>;
} & Omit<CardProps, "children">;

/**
 * BaseCard is a reusable wrapper over MUI's Card with slots for image, content, and actions.
 *
 * Supports custom `maxWidth`, `sx`, and all standard CardProps.
 */
export const BaseCard = ({
  image,
  cardContent,
  actions,
  maxWidth,
  sx,
  ...rest
}: BaseCardProps) => {
  return (
    <MUICard
      data-testid="base-card"
      sx={{ maxWidth, ...sx }}
      {...rest}
      elevation={5}
    >
      {image && <MUIBox>{image}</MUIBox>}
      {cardContent && <MUICardContent>{cardContent}</MUICardContent>}
      {actions && (
        <MUIBox px={2} pb={2}>
          {actions}
        </MUIBox>
      )}
    </MUICard>
  );
};
