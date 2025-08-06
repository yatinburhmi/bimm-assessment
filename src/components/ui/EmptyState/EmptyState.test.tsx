import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Button } from "@mui/material";

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState title="No Cars" description="Try again later" />);
    expect(screen.getByText("No Cars")).toBeInTheDocument();
    expect(screen.getByText("Try again later")).toBeInTheDocument();
  });

  it("renders icon if provided", () => {
    render(
      <EmptyState icon={<DirectionsCarIcon data-testid="empty-icon" />} />
    );
    expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
  });

  it("renders actions if provided", () => {
    render(<EmptyState actions={<Button>Retry</Button>} />);
    expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument();
  });

  it("renders nothing if no props provided", () => {
    const { container } = render(<EmptyState />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
