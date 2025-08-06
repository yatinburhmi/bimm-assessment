import { ApolloError } from "@apollo/client";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CardGrid from "@/components/ui/CardGrid/CardGrid";
import { Car } from "../../car.types";
import { CarCard } from "../CarCard/CarCard";
import EmptyState from "@/components/ui/EmptyState/EmptyState";

type CarListProps = {
  cars: Car[];
  loading: boolean;
  error: ApolloError | undefined;
};

/**
 *
 * This component renders list of cars in a responsive grid layout
 *
 * It handles:
 * - Renders each car using the CarCard component in shared  CardGrid layout
 * - Shows error and loading fallback via EmptyState shared component
 * - Shows fallback via EmptyState if no cars are found
 */
const CarList = ({ cars, loading, error }: CarListProps) => {
  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <EmptyState
        title="Error loading cars"
        description={error.message}
        icon={<DirectionsCarIcon fontSize="large" color="error" />}
      />
    );
  }

  if (cars.length === 0) {
    return (
      <EmptyState
        title="No cars found"
        description="Try adjusting your filters or search query."
        icon={<DirectionsCarIcon fontSize="large" color="disabled" />}
      />
    );
  }
  return (
    <CardGrid paddingY={2}>
      {cars.map((car: Car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </CardGrid>
  );
};

export default CarList;
