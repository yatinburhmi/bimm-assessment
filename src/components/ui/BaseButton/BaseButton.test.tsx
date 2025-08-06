import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseButton from "./BaseButton";
import "@testing-library/jest-dom";

describe("BaseButton", () => {
  it("renders button with text", () => {
    render(<BaseButton>Click Me</BaseButton>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });
  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<BaseButton onClick={handleClick}>Click</BaseButton>);

    await userEvent.click(screen.getByRole("button", { name: /click/i }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("respects props like disabled and variant", () => {
    render(
      <BaseButton disabled variant="outlined">
        Disabled Button
      </BaseButton>
    );

    const button = screen.getByRole("button", { name: /disabled button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass("MuiButton-outlined"); // MUI adds this class
  });
});
