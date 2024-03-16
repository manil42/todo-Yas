import React, { useState } from "react";
import TodoAddForm from "../AddForm/TodoAddForm";
import { useNavigate, useParams } from "react-router-dom";
import ContainerHeader from "../Container-Header/ContainerHeader";

const EditTodo = () => {
  const { userId } = useParams();
  console.log("+++", userId);
  const [formData, setFormData] = useState({
    id: Number(userId),
    title: "",
    description: "",
  });

  const handleSubmit = async (event: any) => {
    setFormData({ ...formData });
    try {
      const response = await fetch(`http://localhost:3001/todo/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Todo created successfully");
        navigation("/", { replace: true });
      } else {
        console.log("faild to create tod");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleInputData = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, id: formData?.id + 1 });
  };
  const navigation = useNavigate();
  const handleBackTodo = () => {
    navigation("/", { replace: true });
  };
  return (
    <div>
      <div className="todo-wrapper">
        <div className="todo-container">
          <div className="todo-header">
            <ContainerHeader
              labelBtn="View Todo"
              label="Edit Todo"
              handleback={handleBackTodo}
            />
          </div>
          <TodoAddForm
            handleSubmit={(e: any) => {
              handleSubmit(e);
            }}
            handleInputData={(e: any) => {
              handleInputData(e);
            }}
            formData={formData}
          />
        </div>
      </div>
    </div>
  );
};
export default EditTodo;
