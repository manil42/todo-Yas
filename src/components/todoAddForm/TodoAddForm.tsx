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
  // const hadnleInputData = (e: any) => {
  //
  // };

  // const handleSubmit = (e: any) => {
  //   //@ts-ignore
  //   setPosts([...post, formData]);
  // };

  return (
    <div className="formContainer" style={{ margin: "16px" }}>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <Button label="Back" handleClick={handleBackTodo} />
          <div className="containers">
            <label htmlFor="" style={{ marginRight: "16px" }}>
              Title :
            </label>
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
            <label htmlFor="" style={{ marginRight: "16px" }}>
              Description :
            </label>
            <input
              type="text"
              name="description"
              value={formData?.description}
              onChange={(e) => {
                handleInputData(e);
              }}
            />
          </div>

          <button type="submit" style={{ marginTop: "8px" }}>
            {" "}
            Add Todo{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoAddForm;
