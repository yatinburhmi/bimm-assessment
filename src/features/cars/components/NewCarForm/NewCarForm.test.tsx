import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewCarForm from "./NewCarForm";
import "@testing-library/jest-dom";

describe("NewCarForm", () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
    mockOnCancel.mockClear();
  });

  it("calls onSubmit with form data when form is valid", async () => {
    render(<NewCarForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    const user = userEvent.setup();

    const fields = [
      { label: "Make", type: "text", value: "Audi" },
      { label: "Model", type: "text", value: "Q5" },
      { label: "Color", type: "text", value: "Black" },
      { label: "Mobile Image URL", type: "text", value: "mobile.jpg" },
      { label: "Tablet Image URL", type: "text", value: "tablet.jpg" },
      { label: "Desktop Image URL", type: "text", value: "desktop.jpg" },
    ];

    for (const field of fields) {
      const input = screen.getByLabelText(field.label);
      await user.clear(input);
      await user.type(input, field.value);
    }

    // Handle "Year" select separately
    const yearSelect = screen.getByLabelText("Year");
    await user.click(yearSelect);

    const option = await screen.findByRole("option", { name: "2025" });
    await user.click(option);

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /add car/i });
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      make: "Audi",
      model: "Q5",
      year: 2025,
      color: "Black",
      mobile: "mobile.jpg",
      tablet: "tablet.jpg",
      desktop: "desktop.jpg",
    });
  });

  it("disables submit button when required fields are empty", () => {
    render(<NewCarForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const submitButton = screen.getByRole("button", { name: /add car/i });
    expect(submitButton).toBeDisabled();
  });

  it("calls onCancel when Cancel button is clicked", async () => {
    render(<NewCarForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    const user = userEvent.setup();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });
});
