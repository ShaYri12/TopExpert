import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottomMenu from "@/app/components/DashboardBottomMenu";
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

describe("BottomMenu", () => {
  test("renders all menu items with correct labels", () => {
    renderWithProvider(<BottomMenu />);
    const menuItems = ["Home", "Bookings", "Services", "Calendar", "More"];
    menuItems.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test("updates active link on click", () => {
    renderWithProvider(<BottomMenu />);

    // Simulate clicking on the "Bookings" menu item
    const bookingsLink = screen.getByText("Bookings").closest("a");
    if (bookingsLink) {
      fireEvent.click(bookingsLink);
      expect(bookingsLink).toHaveClass("text-[#F97316]");
    }

    // Check if the other menu items do not have the active class
    const otherLinks = screen.getAllByRole("link");
    otherLinks.forEach((link) => {
      if (link !== bookingsLink) {
        expect(link).not.toHaveClass("text-[#F97316]");
      }
    });
  });
});
