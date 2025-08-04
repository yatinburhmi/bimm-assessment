import {
  TextField as MUITextField,
  TextFieldVariants,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  label?: string;
  placeholder?: string;
  variant?: TextFieldVariants;
  fullWidth?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
};

const SearchBar = ({
  value,
  onChange,
  onClear,
  label = "Search",
  placeholder,
  variant = "standard",
  fullWidth = true,
  autoFocus = false,
  disabled = false,
}: SearchBarProps) => {
  return (
    <MUITextField
      type="search"
      label={label}
      placeholder={placeholder}
      variant={variant}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      disabled={disabled}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value ? (
              <IconButton onClick={onClear} aria-label="Clear search">
                <ClearIcon />
              </IconButton>
            ) : (
              <SearchIcon />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
