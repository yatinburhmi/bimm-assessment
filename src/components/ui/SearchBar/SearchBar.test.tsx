import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  it("renders with default label and placeholder", () => {
    render(
      <SearchBar value="" onChange={() => {}} placeholder="Search cars" />
    );
    const input = screen.getByLabelText("Search");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Search cars");
  });

  it("calls onChange handler when typing", async () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByLabelText("Search");

    await userEvent.type(input, "Audi");

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it("respects props: variant, fullWidth, autoFocus, disabled", () => {
    render(
      <SearchBar
        value=""
        onChange={() => {}}
        variant="outlined"
        fullWidth={false}
        autoFocus
        disabled
      />
    );

    const input = screen.getByLabelText("Search");
    expect(input).toBeDisabled();
  });

  it("displays SearchIcon inside InputAdornment", () => {
    render(<SearchBar value="" onChange={() => {}} />);
    const svgIcon = screen.getByTestId("SearchIcon");
    expect(svgIcon).toBeInTheDocument();
  });
});
