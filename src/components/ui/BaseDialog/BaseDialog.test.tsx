import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseDialog from "./BaseDialog";
import "@testing-library/jest-dom";

describe("BaseDialog", () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    children: <p>Dialog content</p>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children when open", () => {
    render(<BaseDialog {...defaultProps} />);
    expect(screen.getByText("Dialog content")).toBeInTheDocument();
  });

  it("renders string title and close button", () => {
    render(<BaseDialog {...defaultProps} title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("renders JSX title correctly", () => {
    render(<BaseDialog {...defaultProps} title={<span>Custom Title</span>} />);
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    render(<BaseDialog {...defaultProps} title="Close Test" />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("renders actions when provided", () => {
    render(<BaseDialog {...defaultProps} actions={<button>Save</button>} />);
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });
});
