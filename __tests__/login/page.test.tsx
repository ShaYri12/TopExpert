import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/login/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("Login Component", () => {
  it('renders the "Log in" link', () => {
    render(<Login />);
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
  });
});
