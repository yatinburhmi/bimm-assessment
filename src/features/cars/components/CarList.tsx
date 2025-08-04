import CardGrid from "@/components/ui/CardGrid/CardGrid";
import useCars from "../hooks/useCars";
import { Car } from "../car.types";
import { CarCard } from "./CarCard";

const CarList = () => {
  const { cars, loading, error } = useCars();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <CardGrid>
      {cars.map((car: Car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </CardGrid>
  );
};

export default CarList;
