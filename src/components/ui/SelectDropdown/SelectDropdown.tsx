import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useId } from "react";

type Option = {
  label: string;
  value: string | number;
};

type SelectDropdownProps = {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};
const SelectDropdown = ({
  value,
  onChange,
  label,
  options,
  fullWidth,
  disabled,
}: SelectDropdownProps) => {
  const id = useId();
  const labelId = `${id}-label`;
  return (
    <FormControl fullWidth={fullWidth} disabled={disabled}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}

      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropdown;
