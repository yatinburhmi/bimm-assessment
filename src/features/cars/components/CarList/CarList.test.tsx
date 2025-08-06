import { render, screen } from "@testing-library/react";
import CarList from "./CarList";
import { Car } from "../../car.types";
import { ApolloError } from "@apollo/client";
import "@testing-library/jest-dom";

jest.mock("../CarCard/CarCard", () => ({
  CarCard: ({ car }: { car: Car }) => (
    <div data-testid="car-card">
      {car.make} {car.model}
    </div>
  ),
}));

jest.mock("@/components/ui/CardGrid/CardGrid", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-grid">{children}</div>
  ),
}));

const mockCars: Car[] = [
  {
    id: "1",
    make: "Audi",
    model: "Q5",
    year: 2023,
    color: "Black",
    mobile: "mobile.jpg",
    tablet: "tablet.jpg",
    desktop: "desktop.jpg",
  },
  {
    id: "2",
    make: "BMW",
    model: "X3",
    year: 2022,
    color: "White",
    mobile: "m.jpg",
    tablet: "t.jpg",
    desktop: "d.jpg",
  },
];

describe("CarList", () => {
  it("renders loading message when loading", () => {
    render(<CarList cars={[]} loading={true} error={undefined} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error message when error is present", () => {
    const mockError = new ApolloError({ errorMessage: "Failed to fetch" });
    render(<CarList cars={[]} loading={false} error={mockError} />);
    expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
  });

  it("renders list of car cards when cars are present", () => {
    render(<CarList cars={mockCars} loading={false} error={undefined} />);
    const cards = screen.getAllByTestId("car-card");
    expect(cards.length).toBe(2);
    expect(screen.getByText("Audi Q5")).toBeInTheDocument();
    expect(screen.getByText("BMW X3")).toBeInTheDocument();
  });

  it("wraps CarCards inside CardGrid", () => {
    render(<CarList cars={mockCars} loading={false} error={undefined} />);
    const grid = screen.getByTestId("card-grid");
    expect(grid).toBeInTheDocument();
  });
});
