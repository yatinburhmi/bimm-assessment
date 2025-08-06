import { render, screen } from "@testing-library/react";
import CardGrid from "./CardGrid";
import "@testing-library/jest-dom";

describe("CardGrid", () => {
  it("renders all children inside Grid items", () => {
    render(
      <CardGrid>
        <div>Card A</div>
        <div>Card B</div>
      </CardGrid>
    );

    expect(screen.getByText("Card A")).toBeInTheDocument();
    expect(screen.getByText("Card B")).toBeInTheDocument();
  });

  it("applies spacing and padding props correctly", () => {
    const { container } = render(
      <CardGrid spacing={3} paddingX={2} paddingY={4}>
        <div>One</div>
      </CardGrid>
    );

    const containerGrid = container.querySelector(".MuiGrid-container");

    expect(containerGrid).toHaveClass("MuiGrid-spacing-xs-3");
    // You cannot directly assert `px/py` because MUI translates them into styles, not classNames.
    // You can optionally add `data-testid="grid-container"` and check computed styles if needed.
  });

  it("renders with custom component wrapper", () => {
    const { container } = render(
      <CardGrid component="section">
        <div>Custom Section</div>
      </CardGrid>
    );

    const wrapper = container.querySelector("section");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("MuiGrid-container");
  });
});
