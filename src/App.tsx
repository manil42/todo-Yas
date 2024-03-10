// src/App.js
import React from "react";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; // Notice the change here

import Todo from "./pages/Todo";
import AddTodo from "./pages/Addtodo";
import EditTodo from "./pages/EditTodo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/editTodo/:userId" element={<EditTodo />} />
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
