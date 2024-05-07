// TaskDetails.js

import React from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  // Fetch task details using id and display them in card
  return (
    <div>
      <h2>Task Details</h2>
      <p>Task ID: {id}</p>
    </div>
  );
};

export default TaskDetails;
