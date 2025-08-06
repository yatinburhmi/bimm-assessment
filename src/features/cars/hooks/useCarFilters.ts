import { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { useDebounce } from "@/hooks/useDebounce";
import { GET_CARS } from "../api/getCars";
import { GET_FILTERED_CARS } from "../api/getFilteredCars";
import { Car, SortValue } from "../car.types";

/**
 * useCarFilters handles server-side filtering, sorting, and counting of cars.
 *
 * Combines debounced search, sort, and year filters with Apollo queries,
 * and exposes derived counts and handlers for use in UI components.
 */

const useCarFilters = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortValue>("year_desc");
  const [year, setYear] = useState<string | number>("");

  const debouncedSearch = useDebounce(search, 500);

  // Unfiltered query (for carCount)
  const {
    data: allCarsData,
    loading: allCarsLoading,
    error: allCarsError,
  } = useQuery<{ cars: Car[] }>(GET_CARS);

  // Filtered query (based on current filters)
  const {
    data: filteredCarsData,
    loading: filteredCarsLoading,
    error: filteredCarsError,
    refetch: refetchFilteredCars,
  } = useQuery<{
    cars: Car[];
  }>(GET_FILTERED_CARS, {
    variables: {
      model: debouncedSearch.trim() || undefined,
      year: year || undefined,
    },
  });

  const filteredCars = useMemo(() => {
    const carsToSort =
      search.trim() || year
        ? filteredCarsData?.cars ?? []
        : allCarsData?.cars ?? [];

    const sorted = [...carsToSort];

    switch (sort) {
      case "year_asc":
        return sorted.sort((a, b) => a.year - b.year);
      case "year_desc":
        return sorted.sort((a, b) => b.year - a.year);
      case "model_asc":
        return sorted.sort((a, b) => a.model.localeCompare(b.model));
      case "model_desc":
        return sorted.sort((a, b) => b.model.localeCompare(a.model));
      default:
        return sorted;
    }
  }, [allCarsData?.cars, filteredCarsData?.cars, sort]);

  const carCount = useMemo(() => allCarsData?.cars.length ?? 0, [allCarsData]);
  const filteredCarCount = filteredCars.length;

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
    loading: allCarsLoading || filteredCarsLoading,
    error: allCarsError || filteredCarsError,
    refetchFilteredCars,
  };
};

export default useCarFilters;
