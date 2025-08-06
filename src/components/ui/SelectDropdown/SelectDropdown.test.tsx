import { render, screen, fireEvent } from "@testing-library/react";
import SelectDropdown from "./SelectDropdown";
import "@testing-library/jest-dom";

const OPTIONS = [
  { label: "Year ↑", value: "year_asc" },
  { label: "Year ↓", value: "year_desc" },
];

describe("SelectDropdown", () => {
  it("renders label and current value", () => {
    render(
      <SelectDropdown
        label="Sort by"
        options={OPTIONS}
        value="year_asc"
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Sort by")).toBeInTheDocument();
    expect(screen.getByText("Year ↑")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(
      <SelectDropdown
        label="Sort"
        value="year_asc"
        onChange={() => {}}
        options={OPTIONS}
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));

    const items = screen.getAllByRole("option");
    expect(items).toHaveLength(OPTIONS.length);
    expect(items[0]).toHaveTextContent("Year ↑");
  });

  it("calls onChange with selected value", () => {
    const handleChange = jest.fn();

    render(
      <SelectDropdown
        label="Sort"
        value="year_asc"
        onChange={handleChange}
        options={OPTIONS}
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Year ↓"));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("year_desc");
  });

  it("calls onBlur when blurred", () => {
    const handleBlur = jest.fn();

    render(
      <SelectDropdown
        label="Sort"
        value="year_asc"
        onChange={() => {}}
        onBlur={handleBlur}
        options={OPTIONS}
      />
    );

    const select = screen.getByLabelText("Sort");
    fireEvent.blur(select);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("respects disabled and fullWidth props", () => {
    render(
      <SelectDropdown
        label="Sort"
        value="year_asc"
        onChange={() => {}}
        disabled
        fullWidth
        options={OPTIONS}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveAttribute("aria-disabled", "true");
  });
});
