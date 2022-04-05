import { render, screen } from "@testing-library/react";
import React from "react";

import Router from "../index";

test("It should navigate to the home page", () => {
  render(<Router />, { route: "/" });
  const InputElement = screen.getByTestId("homePage");
  expect(InputElement).toBeInTheDocument();
});

// test("It should navigate to the history page", () => {
//   render(<Router />, { route: "history" });
//   const InputElement = screen.getByTestId("historyPage");
//   expect(InputElement).toBeInTheDocument();
// });
