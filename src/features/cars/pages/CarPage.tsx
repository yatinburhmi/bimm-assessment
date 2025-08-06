import { useState } from "react";
import CarList from "../components/CarList";
import CarToolbar from "../components/CarToolbar";
import { Box as MUIBox } from "@mui/material";
import useCars from "../hooks/useCars";
import useCarFilters from "../hooks/useCarFilters";
import AddCarDialog from "../components/AddCarDialog";

const CarPage = () => {
  const [showAddCarDialog, setShowAddCarDialog] = useState<boolean>(false);
  const { cars, loading, error } = useCars();
  const {
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
  } = useCarFilters(cars);

  const handleAddCarClick = () => setShowAddCarDialog(true);

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
        carCount={carCount}
        filteredCarCount={filteredCarCount}
        activeFilterCount={activeFilterCount}
      />
      <CarList cars={filteredCars} loading={loading} error={error} />
      <AddCarDialog
        open={showAddCarDialog}
        onClose={() => setShowAddCarDialog(false)}
      />
    </MUIBox>
  );
};

export default CarPage;
