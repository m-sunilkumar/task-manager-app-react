// TaskBoard.js
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskColumn from "../TaskColumn/taskColumn";
import AddTaskForm from "../Forms/addTaskForms";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState(["ToDo", "In Progress", "Done"]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleMoveTask = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  return (
    <Container>
      <h4 variant="h4">Tasks Board</h4>
      <Grid container spacing={2}>
        {columns.map((column) => (
          <TaskColumn
            key={column}
            column={column}
            tasks={tasks.filter((task) => task.status === column)}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
          />
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <AddTaskForm onAddTask={handleAddTask} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskBoard;
