import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../index";
import { ConverterContextProvider } from "../../../../context/Converter.context";

test("It should exist in the DOM and render correctly", () => {
  const onSubmitFn = jest.fn();
  render(
    <ConverterContextProvider>
      <Form onSubmit={onSubmitFn} />
    </ConverterContextProvider>
  );
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
});

test("It should calls onSubmit prop function when form is submitted", () => {
  const onSubmitFn = jest.fn();
  render(
    <ConverterContextProvider>
      <Form onSubmit={onSubmitFn} />
    </ConverterContextProvider>
  );
  fireEvent.submit(screen.getByTestId("form"));
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
