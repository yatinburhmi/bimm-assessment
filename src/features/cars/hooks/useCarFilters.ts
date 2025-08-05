import { useMemo, useState } from "react";
import { Car, SortValue } from "../car.types";

const useCarFilters = (cars: Car[]) => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortValue>("year_desc");
  const [year, setYear] = useState<string | number>("");

  const carCount: number = cars.length;

  const filteredCars = useMemo(() => {
    let result = [...cars];

    if (search.trim()) {
      result = result.filter((car) =>
        car.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (year) {
      result = result.filter((car) => String(car.year) === String(year));
    }

    result.sort((a: Car, b: Car) => {
      switch (sort) {
        case "year_asc":
          return a.year - b.year;
        case "year_desc":
          return b.year - a.year;
        case "model_asc":
          return a.model.localeCompare(b.model);
        case "model_desc":
          return b.model.localeCompare(a.model);
        default:
          return 0;
      }
    });
    return result;
  }, [cars, search, year, sort]);

  const filteredCarCount = useMemo(() => filteredCars.length, [filteredCars]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (search.trim()) count++;
    if (year) count++;
    if (sort !== "year_desc") count++;
    return count;
  }, [search, year, sort]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (value: SortValue) => setSort(value);

  const handleYearChange = (value: string | number) => setYear(value);

  const handleResetFilter = () => {
    setSort("year_desc");
    setSearch("");
    setYear("");
  };

  return {
    search,
    handleSearchChange,
    sort,
    handleSortChange,
    year,
    handleYearChange,
    carCount,
    filteredCarCount,
    activeFilterCount,
    handleResetFilter,
    filteredCars,
  };
};

export default useCarFilters;
