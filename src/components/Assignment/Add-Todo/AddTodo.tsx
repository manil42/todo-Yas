import React from "react";
import ContainerHeader from "../Container-Header/ContainerHeader";
import AddForm from "../AddForm/AddForm";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigation = useNavigate();
  const handleBackTodo = () => {
    navigation("/", { replace: true });
  };
  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <div className="todo-header">
          <ContainerHeader
            labelBtn="View Todo"
            label="Add Todo"
            handleback={handleBackTodo}
          />
        </div>
        <AddForm />
      </div>
    </div>
  );
};
export default AddTodo;
