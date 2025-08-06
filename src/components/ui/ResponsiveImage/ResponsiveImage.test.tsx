import { render, screen, fireEvent } from "@testing-library/react";
import { ResponsiveImage } from "./ResponsiveImage";
import "@testing-library/jest-dom";

const IMAGE_URLS = {
  desktop: "https://example.com/desktop.jpg",
  tablet: "https://example.com/tablet.jpg",
  mobile: "https://example.com/mobile.jpg",
};

describe("ResponsiveImage", () => {
  it("renders a picture tag", () => {
    render(<ResponsiveImage />);
    expect(document.querySelector("picture")).toBeInTheDocument();
  });

  it("renders source tags based on provided breakpoints", () => {
    render(<ResponsiveImage {...IMAGE_URLS} />);
    const sources = document.querySelectorAll("source");
    expect(sources.length).toBe(3);

    expect(sources[0]).toHaveAttribute("media", "(min-width:1024px)");
    expect(sources[0]).toHaveAttribute("srcset", IMAGE_URLS.desktop);

    expect(sources[1]).toHaveAttribute("media", "(min-width:640px)");
    expect(sources[1]).toHaveAttribute("srcset", IMAGE_URLS.tablet);

    expect(sources[2]).toHaveAttribute("media", "(max-width: 639px)");
    expect(sources[2]).toHaveAttribute("srcset", IMAGE_URLS.mobile);
  });

  it("renders img tag with fallbackSrc", () => {
    render(<ResponsiveImage alt="Audi Car" />);
    const img = screen.getByRole("img", { name: "Audi Car" });
    expect(img).toHaveAttribute("src", expect.stringContaining("audi.com"));
  });

  it("applies passed className, style, and loading props", () => {
    render(
      <ResponsiveImage
        alt="Test Image"
        className="custom-class"
        loading="lazy"
        style={{ borderRadius: "10px" }}
      />
    );

    const img = screen.getByRole("img");
    expect(img).toHaveClass("custom-class");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveStyle("border-radius: 10px");
  });

  it("fallbackSrc is reapplied on error", () => {
    render(
      <ResponsiveImage
        alt="Broken"
        fallbackSrc="https://example.com/fallback.jpg"
      />
    );

    const img = screen.getByRole("img");

    // Simulate image error
    fireEvent.error(img);

    expect(img).toHaveAttribute("src", "https://example.com/fallback.jpg");
  });
});
