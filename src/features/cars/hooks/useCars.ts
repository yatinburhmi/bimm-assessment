import { useQuery } from "@apollo/client";
import { Car } from "../car.types";
import { GET_CARS } from "../api/getCars";

/**
 * useCars fetches the full list of cars using the GET_CARS GraphQL query.
 *
 * Returns the cars array along with loading and error states.
 */

const useCars = () => {
  const { data, loading, error } = useQuery<{ cars: Car[] }>(GET_CARS);
  const cars = data?.cars ?? [];

  return {
    cars,
    loading,
    error,
  };
};

export default useCars;
