import { BaseCard } from "@/components/ui/BaseCard/BaseCard";
import { Car } from "../car.types";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage/ResponsiveImage";
import {
  Box as MUIBox,
  Chip as MUIChip,
  Typography as MUITypography,
} from "@mui/material";

type CarCardProps = {
  car: Car;
};

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
