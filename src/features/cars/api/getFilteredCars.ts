import { gql } from "@apollo/client";

export const GET_FILTERED_CARS = gql`
  query GetFilterdCars(
    $make: String
    $model: String
    $year: Int
    $color: String
  ) {
    cars(make: $make, model: $model, year: $year, color: $color) {
      id
      make
      model
      year
      color
      mobile
      tablet
      desktop
    }
  }
`;
