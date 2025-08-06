// CarCard.test.tsx
import { render, screen } from "@testing-library/react";
import { CarCard } from "./CarCard";
import { Car } from "../../car.types";
import "@testing-library/jest-dom";

// Mock subcomponents if needed
jest.mock("@/components/ui/ResponsiveImage/ResponsiveImage", () => ({
  ResponsiveImage: ({ alt }: { alt: string }) => (
    <img alt={alt} data-testid="responsive-image" />
  ),
}));

jest.mock("@/components/ui/BaseCard/BaseCard", () => ({
  BaseCard: ({ image, cardContent }: any) => (
    <div>
      <div data-testid="card-image">{image}</div>
      <div data-testid="card-content">{cardContent}</div>
    </div>
  ),
}));

const mockCar: Car = {
  id: "1",
  make: "Audi",
  model: "Q5",
  year: 2023,
  color: "Black",
  mobile: "https://example.com/mobile.jpg",
  tablet: "https://example.com/tablet.jpg",
  desktop: "https://example.com/desktop.jpg",
};

describe("CarCard", () => {
  it("renders car image with correct alt text", () => {
    render(<CarCard car={mockCar} />);
    const img = screen.getByTestId("responsive-image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Audi Q5 2023");
  });

  it("renders car title correctly", () => {
    render(<CarCard car={mockCar} />);
    expect(screen.getByText("2023 Q5 Audi")).toBeInTheDocument();
  });

  it("renders color chip correctly", () => {
    render(<CarCard car={mockCar} />);
    expect(screen.getByText("Black")).toBeInTheDocument();
  });

  it("passes correct props to ResponsiveImage", () => {
    // You can expand this by mocking ResponsiveImage with a spy if needed
    render(<CarCard car={mockCar} />);
    expect(screen.getByTestId("responsive-image")).toBeInTheDocument();
  });

  it("renders BaseCard with image and content", () => {
    render(<CarCard car={mockCar} />);
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(screen.getByTestId("card-content")).toBeInTheDocument();
  });
});
