import {
  TextField as MUITextField,
  TextFieldVariants,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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

/**
 * SearchBar is a styled wrapper around MUI's TextField for search inputs.
 *
 * Includes a search icon and supports full TextField customization.
 */

const SearchBar = ({
  value,
  onChange,
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
            <SearchIcon data-testid="SearchIcon" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
