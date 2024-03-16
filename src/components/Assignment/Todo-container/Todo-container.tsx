import { useState, useEffect } from "react";
import Card from "../Card/Card";
import ContainerHeader from "../Container-Header/ContainerHeader";
import { useNavigate } from "react-router-dom";

const TodoContainer = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const navigation = useNavigate();
  const handleAddTodo = () => {
    navigation("/addTodo", { replace: true });
  };
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/todo/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log("successfully delete ");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleEdit = (id: number) => {
    navigation(`/editTodo/${id}`, { replace: true });
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <div className="todo-header">
          <ContainerHeader
            labelBtn="Add Todo"
            label="Todo List"
            handleback={handleAddTodo}
          />
        </div>
        <div className="card-wrapper">
          {post?.map((data: any) => (
            <Card
              title={data.title}
              description={data.description}
              handleEdit={() => {
                handleEdit(data.id);
              }}
              handleDelete={() => {
                handleDelete(data.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
