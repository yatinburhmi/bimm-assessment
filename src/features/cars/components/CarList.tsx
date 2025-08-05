import { ApolloError } from "@apollo/client";
import CardGrid from "@/components/ui/CardGrid/CardGrid";
import { Car } from "../car.types";
import { CarCard } from "./CarCard";

type CarListProps = {
  cars: Car[];
  loading: boolean;
  error: ApolloError | undefined;
};
const CarList = ({ cars, loading, error }: CarListProps) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <CardGrid paddingY={2}>
      {cars.map((car: Car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </CardGrid>
  );
};

export default CarList;
