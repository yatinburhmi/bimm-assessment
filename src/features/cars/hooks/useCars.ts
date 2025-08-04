import { useQuery } from "@apollo/client";
import { Car } from "../car.types";
import { GET_CARS } from "../api/getCars";

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
