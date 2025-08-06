import React from "react";
import { Box as MUIBox, Grid as MUIGrid } from "@mui/material";
import BaseButton from "@/components/ui/BaseButton/BaseButton";
import CarSearchBar from "./CarSearchBar";
import CarSortDropdown from "./CarSortDropdown";
import CarYearFilterDropdown from "./CarYearFilterDropdown";
import CarToolbarHeader from "./CarToolbarHeader";

type CarToolbarProps = {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sort: "year_asc" | "year_desc" | "model_asc" | "model_desc";
  onSortChange: (
    value: "year_asc" | "year_desc" | "model_asc" | "model_desc"
  ) => void;
  year: string | number;
  onYearChange: (value: string | number) => void;
  onResetFilter: () => void;
  onAddCarClick: () => void;
  carCount: number;
  filteredCarCount: number;
  activeFilterCount: number;
};

/**
 *
 * This is the control panel for CarList
 *
 * It handles:
 * - Display of CarToolbarHeader, CarSearchBar, CarSortDropDown, CarYearDropdown, Reset and Add Car Button
 * - CarToolbarHeader displays total and filtered car count along with number of active filters
 * - CarSearchBar - Search Input for filtering cars by model
 * - CarSortDropdown - Select dropdown to sort cars
 * - CarYearDropdown - Select dropdown to filter cars by year
 * - Reset Button - To reset all active filters
 * - Add Car Button - Opens dialog to create a new car
 *
 */
const CarToolbar = ({
  search,
  onSearchChange,
  sort,
  onSortChange,
  year,
  onYearChange,
  onResetFilter,
  onAddCarClick,
  carCount,
  filteredCarCount,
  activeFilterCount,
}: CarToolbarProps) => {
  return (
    <MUIBox
      p={3}
      border={2}
      borderRadius={5}
      borderColor={"lightgrey"}
      bgcolor={"white"}
    >
      <CarToolbarHeader
        carCount={carCount}
        filteredCarCount={filteredCarCount}
        activeFilterCount={activeFilterCount}
      />
      <MUIGrid container spacing={2} justifyContent="space-between">
        <MUIGrid
          container
          size={{ xs: 12, sm: 12, md: 12, lg: "grow" }}
          spacing={2}
        >
          <MUIGrid size={{ xs: 12, sm: 12, md: 12, lg: 7 }}>
            <CarSearchBar value={search} onChange={onSearchChange} />
          </MUIGrid>
          <MUIGrid size={{ xs: 12, sm: 12, md: 12, lg: "grow" }}>
            <CarSortDropdown value={sort} onChange={onSortChange} />
          </MUIGrid>
          <MUIGrid size={{ xs: 12, sm: 12, md: 12, lg: "grow" }}>
            <CarYearFilterDropdown value={year} onChange={onYearChange} />
          </MUIGrid>
          <MUIGrid size={{ xs: 12, sm: 12, md: 12, lg: "auto" }}>
            <BaseButton
              variant="outlined"
              onClick={onResetFilter}
              sx={{ height: "100%" }}
              fullWidth={true}
              disabled={activeFilterCount == 0}
            >
              Reset
            </BaseButton>
          </MUIGrid>
        </MUIGrid>

        <MUIGrid size={{ xs: "grow", lg: "auto" }}>
          <BaseButton
            variant="contained"
            onClick={onAddCarClick}
            sx={{ height: "100%" }}
            fullWidth={true}
          >
            Add Car
          </BaseButton>
        </MUIGrid>
      </MUIGrid>
    </MUIBox>
  );
};

export default CarToolbar;
