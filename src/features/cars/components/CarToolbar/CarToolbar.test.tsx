import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarToolbar from "./CarToolbar";

describe("CarToolbar", () => {
  const mockProps = {
    search: "Audi",
    onSearchChange: jest.fn(),
    sort: "year_asc" as const,
    onSortChange: jest.fn(),
    year: 2025,
    onYearChange: jest.fn(),
    onResetFilter: jest.fn(),
    onAddCarClick: jest.fn(),
    carCount: 10,
    filteredCarCount: 5,
    activeFilterCount: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all subcomponents", () => {
    render(<CarToolbar {...mockProps} />);

    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Add Car")).toBeInTheDocument();
  });

  it("calls onSearchChange when typing in the search bar", async () => {
    render(<CarToolbar {...mockProps} />);
    const input = screen.getByRole("searchbox");

    await userEvent.clear(input);
    await userEvent.type(input, "Q5");

    expect(mockProps.onSearchChange).toHaveBeenCalled();
  });

  it("calls onSortChange when sort dropdown is changed", async () => {
    render(<CarToolbar {...mockProps} />);
    const select = screen.getByLabelText(/Sort by/i);

    await userEvent.click(select);
    const option = await screen.findByText(/Year ↓/i); // adjust this depending on options
    await userEvent.click(option);

    expect(mockProps.onSortChange).toHaveBeenCalledWith("year_desc");
  });

  it("calls onYearChange when year dropdown is changed", async () => {
    render(<CarToolbar {...mockProps} />);
    const select = screen.getByLabelText(/Filter by Year/i);

    await userEvent.click(select);
    const option = await screen.findByText("2024");
    await userEvent.click(option);

    expect(mockProps.onYearChange).toHaveBeenCalledWith(2024);
  });

  it("calls onResetFilter when clicking reset", async () => {
    render(<CarToolbar {...mockProps} />);
    const resetBtn = screen.getByRole("button", { name: /Reset/i });

    await userEvent.click(resetBtn);
    expect(mockProps.onResetFilter).toHaveBeenCalled();
  });

  it("disables Reset button when no filters are active", () => {
    render(<CarToolbar {...mockProps} activeFilterCount={0} />);
    expect(screen.getByText("Reset")).toBeDisabled();
  });

  it("calls onAddCarClick when Add Car button is clicked", async () => {
    render(<CarToolbar {...mockProps} />);
    const addCarBtn = screen.getByRole("button", { name: /Add Car/i });

    await userEvent.click(addCarBtn);
    expect(mockProps.onAddCarClick).toHaveBeenCalled();
  });
});
