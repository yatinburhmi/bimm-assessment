import { useId } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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
  onBlur?: () => void;
};

/**
 * SelectDropdown is a reusable wrapper around MUI's Select component.
 *
 * Supports labeled options, fullWidth layout, and native value handling.
 */

const SelectDropdown = ({
  value,
  onChange,
  label,
  options,
  fullWidth,
  disabled,
  onBlur,
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
        onBlur={onBlur}
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
