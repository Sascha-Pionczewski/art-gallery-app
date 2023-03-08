import { render, screen } from "@testing-library/react";
import ArtPieces from "./index.js";

// test("All art pieces are displayed as a list", () => {
//   render(<ArtPieces />);
//   const list = screen.getByRole("list", {
//     name: /list of art/i,
//   });
//   expect(list).toBeInTheDocument();
// });

// test("Each art piece's image is displayed", () => {
//   render(<ArtPieces />);
//   const image = screen.getByRole("Image", {
//     name: "image of art",
//   });
//   expect(image).toBeInTheDocument();
// });

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
