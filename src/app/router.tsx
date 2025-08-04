import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskList } from "@/features/tasks/components/TaskList";
import Home from "./Home";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tasklist" element={<TaskList />}></Route>
      </Routes>
    </Router>
  );
};
