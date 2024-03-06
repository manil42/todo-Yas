import React, { useState } from "react";
import TodoAddForm from "../components/todoAddForm/TodoAddForm";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [formData, setFormData] = useState({
    id: 3,
    title: "",
    description: "",
  });
  const navigation = useNavigate();

  const handleSubmit = async (event: any) => {
    setFormData({ ...formData, id: formData.id + 1 });
    try {
      const response = await fetch("http://localhost:3001/todo", {
        method: "POST",
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
  return (
    <div>
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
  );
};

export default AddTodo;
