import React, { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type todoFormProps = {
  handleSubmit: (e: any) => void;
  handleInputData: (e: any) => void;
  handleBackTodo?: () => void;
  formData?: {
    id: number;
    title: string;
    description: string;
  };
};
const TodoAddForm = ({
  handleSubmit,
  handleInputData,
  formData,
}: todoFormProps) => {
  const navigation = useNavigate();

  const handleBackTodo = () => {
    navigation("/", { replace: true });
  };

  return (
    <div className="todo-add-form-container">
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="containers">
            <label htmlFor="">Title :</label>
            <input
              type="text"
              name="title"
              value={formData?.title}
              onChange={(e) => {
                handleInputData(e);
              }}
            />
          </div>

          <div className="containers">
            <label htmlFor="">Description :</label>
            <input
              type="text"
              name="description"
              value={formData?.description}
              onChange={(e) => {
                handleInputData(e);
              }}
            />
          </div>
          <div className="main-btn-container">
            <div className="child-button">
              <Button label="Back" handleClick={handleBackTodo} isBackbtn />
            </div>
            <div className="child-button">
              <button type="submit" className="button-back-color">
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoAddForm;
