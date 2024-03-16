import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; // Notice the change here
import TodoContainer from "./components/Assignment/Todo-container/Todo-container";
import AddTodo from "./components/Assignment/Add-Todo/AddTodo";
import EditTodo from "./components/Assignment/Edit-Todo/EditTodo";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/editTodo/:userId" element={<EditTodo />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/" element={<TodoContainer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
