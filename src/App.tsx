// src/App.js
import React from "react";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; // Notice the change here

import Todo from "./pages/todo";
import AddTodo from "./pages/Addtodo";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/addTodo">AddTodo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
