import { useMutation } from "@apollo/client";
import { Car } from "../car.types";
import { CREATE_CAR } from "../api/createCar";
import { GET_CARS } from "../api/getCars";

export const useCreateCar = () => {
  const [createCar, { loading, error }] = useMutation(CREATE_CAR, {
    refetchQueries: [{ query: GET_CARS }],
  });

  const addCar = async (carData: Omit<Car, "id">) => {
    const { data } = await createCar({
      variables: {
        input: carData,
      },
    });

    return data?.createCar;
  };

  return { addCar, loading, error };
};
