import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import AddCarDialog from "./AddCarDialog";
import { Car } from "../../car.types";
import { useCreateCar } from "../../hooks/useCreateCar";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockAddCar = jest.fn();
(useCreateCar as jest.Mock).mockReturnValue({ addCar: mockAddCar });

jest.mock("../../hooks/useCreateCar", () => ({
  useCreateCar: jest.fn(),
}));

const mockCarData: Omit<Car, "id"> = {
  make: "Audi",
  model: "Q5",
  year: 2025,
  color: "Black",
  mobile: "https://m.example.com",
  tablet: "https://t.example.com",
  desktop: "https://d.example.com",
};

describe("AddCarDialog", () => {
  it("renders BaseDialog and NewCarForm when open", () => {
    render(
      <AddCarDialog open={true} onClose={jest.fn()} onCarAdded={jest.fn()} />
    );
    expect(screen.getByText("Add a New Car")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("calls addCar, onClose, and onCarAdded on submit", async () => {
    const onClose = jest.fn();
    const onCarAdded = jest.fn();
    mockAddCar.mockResolvedValueOnce(undefined); // simulate success

    render(
      <AddCarDialog open={true} onClose={onClose} onCarAdded={onCarAdded} />
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: /make/i }),
      mockCarData.make
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /model/i }),
      mockCarData.model
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: /color/i }),
      mockCarData.color
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /mobile/i }),
      mockCarData.mobile
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /tablet/i }),
      mockCarData.tablet
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /desktop/i }),
      mockCarData.desktop
    );

    await userEvent.click(screen.getByRole("button", { name: /add car/i }));
    await waitFor(() => {
      expect(mockAddCar).toHaveBeenCalledWith(mockCarData);
      expect(onClose).toHaveBeenCalled();
      expect(onCarAdded).toHaveBeenCalled();
    });
  });

  it("calls onClose when cancel is clicked", () => {
    const onClose = jest.fn();

    render(
      <AddCarDialog open={true} onClose={onClose} onCarAdded={jest.fn()} />
    );
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });
});
