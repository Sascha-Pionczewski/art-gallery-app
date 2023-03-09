import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces />);
  const artPieces = screen.getByRole("list");
  expect(artPieces).toBeInTheDocument();
});
