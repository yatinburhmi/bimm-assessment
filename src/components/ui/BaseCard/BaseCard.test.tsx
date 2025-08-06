import { render, screen } from "@testing-library/react";
import { BaseCard } from "./BaseCard";
import "@testing-library/jest-dom";

describe("BaseCard", () => {
  it("renders without crashing", () => {
    render(<BaseCard />);
    expect(screen.getByTestId("base-card")).toBeInTheDocument();
  });

  it("renders image, cardContent, and actions when provided", () => {
    render(
      <BaseCard
        image={<img src="/test.jpg" alt="Test Image" />}
        cardContent={<p>Card Content</p>}
        actions={<button>Action</button>}
      />
    );

    expect(screen.getByAltText("Test Image")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument();
  });

  it("applies maxWidth style correctly", () => {
    const { container } = render(<BaseCard maxWidth={500} />);
    const card = container.querySelector(".MuiCard-root");
    expect(card).toHaveStyle("max-width: 500px");
  });
});
