import { useMemo, useState } from "react";
import CarList from "../components/CarList";
import CarToolbar from "../components/CarToolbar";
import { Box as MUIBox } from "@mui/material";
import { Car, SortValue } from "../car.types";
import useCars from "../hooks/useCars";

const CarPage = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortValue>("year_desc");
  const [year, setYear] = useState<string | number>("");
  const [showAddCarDialog, setShowAddCarDialog] = useState<boolean>(false);

  const { cars, loading, error } = useCars();

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (value: SortValue) => setSort(value);

  const handleYearChange = (value: string | number) => setYear(value);

  const handleAddCarClick = () => setShowAddCarDialog(true);

  const handleResetFilter = () => {
    setSort("year_desc");
    setSearch("");
    setYear("");
  };

  return (
    <MUIBox>
      <CarToolbar
        search={search}
        onSearchChange={handleSearchChange}
        sort={sort}
        onSortChange={handleSortChange}
        year={year}
        onYearChange={handleYearChange}
        onAddCarClick={handleAddCarClick}
        onResetFilter={handleResetFilter}
      />
      <CarList cars={filteredCars} loading={loading} error={error} />
    </MUIBox>
  );
};

export default CarPage;
