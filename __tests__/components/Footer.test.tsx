import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FooterCentered } from "@/app/components/Footer";
import { MantineProvider } from "@mantine/core";

// Mocking next/image to avoid errors during testing
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

// Wrap the component with MantineProvider
const renderWithProvider = (ui: React.ReactElement) => {
  return render(<MantineProvider>{ui}</MantineProvider>);
};

describe("FooterCentered", () => {
  test("renders the main heading", () => {
    renderWithProvider(<FooterCentered />);
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });

  test("renders the footer logo image", () => {
    renderWithProvider(<FooterCentered />);
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/assets/logowhite.svg");
  });

  test("renders the links in the footer", () => {
    renderWithProvider(<FooterCentered />);
    const links = ["Home", "Features", "FAQs", "Testimonials"];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test("hides the footer on login page", () => {
    // Mock window.location.pathname to simulate the login page
    delete window.location;
    window.location = { pathname: "/login" } as unknown as Location;

    renderWithProvider(<FooterCentered />);
    expect(screen.queryByText(/Get Started/i)).not.toBeInTheDocument();
  });
});
