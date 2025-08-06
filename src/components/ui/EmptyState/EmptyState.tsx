import { Box as MUIBox, Typography as MUITypography } from "@mui/material";
import type { ReactNode } from "react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  actions?: ReactNode;
};

const EmptyState = ({ title, description, icon, actions }: EmptyStateProps) => {
  return (
    <MUIBox
      textAlign="center"
      py={6}
      px={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
    >
      {icon && <MUIBox mb={2}>{icon}</MUIBox>}
      {title && (
        <MUITypography variant="h6" gutterBottom>
          {title}
        </MUITypography>
      )}
      {description && (
        <MUITypography variant="body2" color="textSecondary">
          {description}
        </MUITypography>
      )}
      {actions && <MUIBox mt={3}>{actions}</MUIBox>}
    </MUIBox>
  );
};

export default EmptyState;
