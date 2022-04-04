import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../index";

test("It should exist in the DOM and render correctly", () => {
  render(<Input />);
  const InputElement = screen.getByTestId("input");
  expect(InputElement).toBeInTheDocument();
});

test("It should not allow letters to be inputted", () => {
  const inputType = "number";
  render(<Input type={inputType} />);
  const InputElement = screen.getByTestId("input");
  expect(InputElement.value).toBe(""); // empty before
  fireEvent.change(InputElement, { target: { value: "dummy string" } });
  expect(InputElement.value).toBe(""); //empty after
});
