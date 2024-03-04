import React, { useState } from "react";

const TodoAddForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
  });
  type FormProps = {
    handleSubmit?: () => void;
    handleInput?: () => void;
  };
  const hadnleInputData = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    //@ts-ignore
    setPosts([...post, formData]);
  };

  return (
    <div className="formContainer" style={{ margin: "16px" }}>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="containers">
            <label htmlFor="" style={{ marginRight: "16px" }}>
              Title :
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => {
                hadnleInputData(e);
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
              value={formData.description}
              onChange={(e) => {
                hadnleInputData(e);
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
