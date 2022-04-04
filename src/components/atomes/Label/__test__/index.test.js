import { render, screen } from "@testing-library/react";
import Label from "../index";

test("It should exist in the DOM and render correctly", () => {
  const title = "labelText";
  render(<Label title={title} />);
  const LabelElement = screen.getByTestId("label");
  expect(LabelElement).toBeInTheDocument();
  expect(LabelElement).toHaveTextContent(title);
});
