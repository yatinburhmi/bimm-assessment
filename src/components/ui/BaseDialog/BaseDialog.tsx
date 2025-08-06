import { ReactNode } from "react";
import {
  DialogActions as MUIDialogActions,
  DialogContent as MUIDialogContent,
  Dialog as MUIDialog,
  DialogTitle as MUIDialogTitle,
  IconButton as MUIIconButton,
} from "@mui/material";
import { Close as MUICloseIcon } from "@mui/icons-material";

type BaseDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string | ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
};

/**
 * BaseDialog is a reusable wrapper over MUI's Dialog with title, close button, content, and optional actions.
 *
 * Supports responsive width, custom title, and full control over dialog content.
 */

const BaseDialog = ({
  open,
  title,
  children,
  onClose,
  actions,
  fullWidth = true,
  maxWidth = "sm",
}: BaseDialogProps) => {
  return (
    <MUIDialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      {title && (
        <MUIDialogTitle>
          {title}
          <MUIIconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <MUICloseIcon />
          </MUIIconButton>
        </MUIDialogTitle>
      )}
      <MUIDialogContent dividers>{children}</MUIDialogContent>
      {actions && <MUIDialogActions>{actions}</MUIDialogActions>}
    </MUIDialog>
  );
};

export default BaseDialog;
