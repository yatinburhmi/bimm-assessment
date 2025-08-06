import { BaseCard } from "@/components/ui/BaseCard/BaseCard";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage/ResponsiveImage";
import {
  Box as MUIBox,
  Chip as MUIChip,
  Typography as MUITypography,
} from "@mui/material";
import { Car } from "../../car.types";

type CarCardProps = {
  car: Car;
};

/**
 * This component is responsible to display a car in a Card using shared BaseCard component
 */

export const CarCard = ({ car }: CarCardProps) => {
  const { mobile, tablet, desktop, make, model, year, color } = car;
  return (
    <BaseCard
      image={
        <MUIBox
          sx={{
            aspectRatio: "3 / 3",
            overflow: "hidden",
          }}
        >
          <ResponsiveImage
            mobile={mobile}
            tablet={tablet}
            desktop={desktop}
            alt={`${make} ${model} ${year}`}
            loading="lazy"
          />
        </MUIBox>
      }
      cardContent={
        <>
          <MUITypography variant="h6">{`${year} ${model} ${make}`}</MUITypography>
          <MUIChip label={color} />
        </>
      }
    />
  );
};
