import { useState } from "react";
import CarList from "../components/CarList/CarList";

import { Box as MUIBox } from "@mui/material";
import useCarFilters from "../hooks/useCarFilters";
import CarToolbar from "../components/CarToolbar/CarToolbar";
import AddCarDialog from "../components/AddCarDialog/AddCarDialog";

const CarPage = () => {
  const [showAddCarDialog, setShowAddCarDialog] = useState<boolean>(false);
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
    loading,
    error,
    refetchFilteredCars,
  } = useCarFilters();

  const handleAddCarClick = () => setShowAddCarDialog(true);
  const handleAddCar = () => {
    refetchFilteredCars();
  };
  return (
    <MUIBox display="flex" flexDirection="column" minHeight="100vh">
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
        onCarAdded={handleAddCar}
      />
    </MUIBox>
  );
};

export default CarPage;
