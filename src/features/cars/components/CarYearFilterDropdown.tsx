import SelectDropdown from "@/components/ui/SelectDropdown/SelectDropdown";
import { YEAR_OPTIONS } from "../constants/yearOptions";

type CarYearFilterDropdownProps = {
  value: string | number;
  onChange: (value: string | number) => void;
};

const CarYearFilterDropdown = ({
  value,
  onChange,
}: CarYearFilterDropdownProps) => {
  return (
    <SelectDropdown
      label="Filter by Year"
      value={value}
      onChange={onChange}
      options={YEAR_OPTIONS}
      fullWidth={true}
    />
  );
};

export default CarYearFilterDropdown;
