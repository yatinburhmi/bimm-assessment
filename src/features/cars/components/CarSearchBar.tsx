import SearchBar from "@/components/ui/SearchBar/SearchBar";

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
      fullWidth={true}
      variant="outlined"
    ></SearchBar>
  );
};

export default CarSearchBar;
