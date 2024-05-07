// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskBoard from "./components/TaskBoard/taskBoard";
import TaskDetails from "./components/TaskDetails/taskDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskBoard />} />
      <Route path="/task/:id" element={<TaskDetails />} />
      <Route element={<>Not found!</>} />
    </Routes>
  );
}

export default App;
