import {
  Chip as MUIChip,
  Grid as MUIGrid,
  Typography as MUITypography,
} from "@mui/material";

type CarToolbarHeaderProps = {
  carCount: number;
  filteredCarCount: number;
  activeFilterCount: number;
};

const CarToolbarHeader = ({
  carCount,
  filteredCarCount,
  activeFilterCount,
}: CarToolbarHeaderProps) => {
  return (
    <MUIGrid
      container
      pb={1}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <MUIGrid size={{ xs: 12, sm: "auto" }}>
        <MUITypography variant="h6">Filter & Sort Cars</MUITypography>
      </MUIGrid>

      <MUIGrid
        container
        size={{ xs: 12, sm: "auto" }}
        spacing={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {activeFilterCount > 0 && (
          <MUIGrid>
            <MUIChip
              variant="outlined"
              color={"primary"}
              label={
                activeFilterCount == 1
                  ? `${activeFilterCount} filter active`
                  : `${activeFilterCount} filters active`
              }
            />
          </MUIGrid>
        )}
        <MUIGrid>
          <MUITypography variant="body1">
            {`${filteredCarCount} of ${carCount} cars`}
          </MUITypography>
        </MUIGrid>
      </MUIGrid>
    </MUIGrid>
  );
};

export default CarToolbarHeader;
