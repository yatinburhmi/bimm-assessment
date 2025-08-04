import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskList } from "@/features/tasks/components/TaskList";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tasklist" element={<TaskList />}></Route>
      </Routes>
    </Router>
  );
};
