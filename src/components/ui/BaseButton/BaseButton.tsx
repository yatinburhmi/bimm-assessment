import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

type BaseButtonProps = MUIButtonProps;

/**
 * BaseButton is a shared wrapper over MUI's Button.
 *
 * Use this instead of MUI's Button directly to allow consistent styling and easy future customization.
 * All MUI ButtonProps are supported.
 */
const BaseButton = ({ ...rest }: BaseButtonProps) => {
  return <MUIButton {...rest} />;
};

export default BaseButton;
