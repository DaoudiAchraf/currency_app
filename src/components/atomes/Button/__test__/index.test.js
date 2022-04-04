import { render, screen ,fireEvent } from "@testing-library/react";
import Button from "../index";

test("It should exist in the DOM and render correctly", () => {
  const title = "clickMe";
  render(<Button title={title} />);
  const ButtonElement = screen.getByTestId("button");
  expect(ButtonElement).toBeInTheDocument();
  expect(ButtonElement).toHaveTextContent(title);
});


test('It should calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}/>);
    fireEvent.click(screen.getByTestId("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
