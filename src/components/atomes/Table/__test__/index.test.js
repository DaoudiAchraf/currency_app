import { render, screen } from "@testing-library/react";
import Table from "../index";

test("It should exist in the DOM and render correctly", () => {
  render(<Table  dataSource={[]} />);
  const TableElement = screen.getByTestId("table");
  expect(TableElement).toBeInTheDocument();
  expect(TableElement).toContainHTML('<th> <th>')
});
