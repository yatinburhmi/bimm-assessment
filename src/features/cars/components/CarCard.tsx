import { BaseCard } from "@/components/ui/BaseCard/BaseCard";
import { Car } from "../car.types";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage/ResponsiveImage";
import { Chip as MUIChip, Typography } from "@mui/material";

type CarCardProps = {
  car: Car;
};

export const CarCard = ({ car }: CarCardProps) => {
  const { mobile, tablet, desktop, make, model, year, color } = car;
  return (
    <BaseCard
      image={
        <ResponsiveImage
          mobile={mobile}
          tablet={tablet}
          desktop={desktop}
          alt={`${make} ${model} ${year}`}
          loading="lazy"
        />
      }
      cardContent={
        <>
          <Typography variant="h6">{`${year} ${model} ${make}`}</Typography>
          <MUIChip label={color} />
        </>
      }
    />
  );
};
