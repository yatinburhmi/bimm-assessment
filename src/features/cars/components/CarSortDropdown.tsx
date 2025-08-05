import SelectDropdown from "@/components/ui/SelectDropdown/SelectDropdown";
import { SortValue } from "../car.types";
import { CAR_SORT_OPTIONS } from "../constants/sortOptions";

type CarSortDropdownProps = {
  value: SortValue;
  onChange: (value: SortValue) => void;
};

const CarSortDropdown = ({ value, onChange }: CarSortDropdownProps) => {
  return (
    <SelectDropdown
      label="Sort by"
      value={value}
      onChange={(val) => onChange(val as SortValue)}
      options={CAR_SORT_OPTIONS}
      fullWidth={true}
    />
  );
};

export default CarSortDropdown;
