// TaskBoard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import TaskBoard from "./TaskBoard";

test("renders Task Board title", () => {
  render(<TaskBoard />);
  const titleElement = screen.getByText(/Task Board/i);
  expect(titleElement).toBeInTheDocument();
});
