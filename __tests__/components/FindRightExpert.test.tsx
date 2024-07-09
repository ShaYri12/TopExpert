import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FindRightExpert from "@/app/components/FindRightExpert";
import { MantineProvider } from "@mantine/core";

// Mocking next/image to avoid errors during testing
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />,
}));

describe("FindRightExpert", () => {
  test("renders the component with correct elements", () => {
    render(
      <MantineProvider>
        <FindRightExpert />
      </MantineProvider>
    );

    // Check if the background image is rendered
    const backgroundImage = screen.getByAltText("Image");
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute("src", "/assets/hero-slider.svg");

    // Check if the text content is rendered
    expect(
      screen.getByText(
        /Get Personalized advice from top experts to your specific questions/i
      )
    ).toBeInTheDocument();

    // Check if the search input and button are rendered
    expect(screen.getByPlaceholderText("Search Expert")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("verifies search input and button attributes", () => {
    render(
      <MantineProvider>
        <FindRightExpert />
      </MantineProvider>
    );

    // Check if the search input has the correct attributes
    const searchInput = screen.getByPlaceholderText(
      "Search Expert"
    ) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "search");
    expect(searchInput).toHaveAttribute("placeholder", "Search Expert");

    // Check if the search button has the correct attributes
    const searchButton = screen.getByText("Search") as HTMLButtonElement;
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveClass(
      "border-borderCustom border-[#1E1E1E] bg-white rounded-[35px] w-[110px] h-[47px]"
    );
  });
});
