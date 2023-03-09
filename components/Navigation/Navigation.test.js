import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("labeled spotlight", () => {
  render(<Navigation />);
  const nav = screen.getByText("Spotlight");
  expect(nav).toBeInTheDocument();
});
