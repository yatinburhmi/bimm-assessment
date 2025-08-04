import SearchBar from "@/components/ui/SearchBar/SearchBar";
import React from "react";

type CarSearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CarSearchBar = ({ value, onChange }: CarSearchBarProps) => {
  return (
    <SearchBar
      label="Search by Model"
      value={value}
      onChange={onChange}
    ></SearchBar>
  );
};

export default CarSearchBar;
