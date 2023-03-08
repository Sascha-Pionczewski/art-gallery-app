import { render, screen } from "@testing-library/react";
import Spotlight from "./index.js";

const mockData = [
  {
    imageSource:
      "https://example-apis.vercel.app/assets/art/flatlay-photography-of-brea-and-fruits.jpg",
    artist: "Max Mustermann",
    name: "Flatlay Photography of Bread and Fruits",
  },
];

test("show random art piece", () => {
  render(<Spotlight pieces={mockData} />);
  const randomPiece = screen.getByRole("random");
  expect(randomPiece).toBeInTheDocument();
});
