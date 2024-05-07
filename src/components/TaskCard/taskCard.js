// TaskCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const TaskCard = ({ task, onDelete, onMove }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleMove = (newStatus) => {
    onMove(task.id, newStatus);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {task.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {task.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Deadline: {task.deadline}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
        {task.status !== "Done" && (
          <Button
            size="small"
            color="primary"
            onClick={() =>
              handleMove(task.status === "ToDo" ? "In Progress" : "Done")
            }
          >
            Move to {task.status === "ToDo" ? "In Progress" : "Done"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default TaskCard;
