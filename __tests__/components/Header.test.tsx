import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeaderMegaMenu } from "@/app/components/Header";
import { MantineProvider } from "@mantine/core";

// Mocking the next/image to avoid errors during testing
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

describe("HeaderMegaMenu", () => {
  test("renders the logo image", () => {
    renderWithProvider(<HeaderMegaMenu />);
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/assets/logo.svg");
  });

  test("renders the menu items", () => {
    renderWithProvider(<HeaderMegaMenu />);
    const menuItems = ["Home", "For Creators", "About Us", "Testimonials"];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("renders the login and sign up buttons", () => {
    renderWithProvider(<HeaderMegaMenu />);
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });
});
