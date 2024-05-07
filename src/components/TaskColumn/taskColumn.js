// TaskColumn.js
import React from "react";
import { Grid, Typography } from "@mui/material";
import TaskCard from "../TaskCard/taskCard";

const TaskColumn = ({ column, tasks, onDeleteTask, onMoveTask }) => {
  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleMove = (taskId, newStatus) => {
    onMoveTask(taskId, newStatus);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography variant="h6" gutterBottom>
        {column}
      </Typography>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onMove={handleMove}
        />
      ))}
    </Grid>
  );
};

export default TaskColumn;
