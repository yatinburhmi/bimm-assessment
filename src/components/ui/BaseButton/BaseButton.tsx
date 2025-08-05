import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
type BaseButtonProps = MUIButtonProps;

const BaseButton = ({ ...rest }: BaseButtonProps) => {
  return <MUIButton {...rest} />;
};

export default BaseButton;
