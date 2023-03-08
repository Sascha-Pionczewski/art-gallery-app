import { render, screen } from "@testing-library/react";
import ArtPieces from "./index.js";

const mockData = [
  {
    slug: "flatlay-photography-of-brea-and-fruits",
    imageSource:
      "https://example-apis.vercel.app/assets/art/flatlay-photography-of-brea-and-fruits.jpg",
    artist: "Max Mustermann",
    name: "Flatlay Photography of Bread and Fruits",
  },
];

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces pieces={mockData} />);
  const artPieces = screen.getByRole("list");
  expect(artPieces).toBeInTheDocument();
});
