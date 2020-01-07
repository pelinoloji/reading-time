import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders h1", () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Estimated Reading Time/i);
  expect(h1Element).toBeInTheDocument();
});

test("renders textarea", () => {
  const { getByPlaceholderText } = render(<App />);
  const textAreaElement = getByPlaceholderText(/Please enter your text/i);
  expect(textAreaElement).toBeInTheDocument();
});

test("renders buton", () => {
  const { getByText } = render(<App />);
  const butonElement = getByText(/Calculate/i);
  expect(butonElement).toBeInTheDocument();
});

test("calculated result should return 1", () => {
  const value = "blabla bla bla";
  const readingTime = 1;
  const { getByText, getByTestId, getByPlaceholderText } = render(<App />);
  const butonElement = getByText(/Calculate/i);
  const textAreaElement = getByPlaceholderText(/Please enter your text/i);
  fireEvent.change(textAreaElement, { target: { value: value } });
  fireEvent.click(butonElement);
  const h5 = getByTestId("result");
  expect(h5.innerHTML).toContain(readingTime);
});
