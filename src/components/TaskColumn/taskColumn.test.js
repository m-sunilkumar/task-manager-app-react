// TaskColumn.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import TaskColumn from "./TaskColumn";

test("renders Task Column title", () => {
  const columnTitle = "To Do";
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Description 1",
      deadline: "2024-05-15",
      status: "ToDo",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description 2",
      deadline: "2024-05-20",
      status: "ToDo",
    },
  ];
  render(<TaskColumn column={columnTitle} tasks={tasks} />);
  const titleElement = screen.getByText(columnTitle);
  expect(titleElement).toBeInTheDocument();
});

test("renders task cards", () => {
  const columnTitle = "To Do";
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Description 1",
      deadline: "2024-05-15",
      status: "ToDo",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description 2",
      deadline: "2024-05-20",
      status: "ToDo",
    },
  ];
  render(<TaskColumn column={columnTitle} tasks={tasks} />);
  const task1Element = screen.getByText("Task 1");
  const task2Element = screen.getByText("Task 2");
  expect(task1Element).toBeInTheDocument();
  expect(task2Element).toBeInTheDocument();
});
