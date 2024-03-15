import { useState, useEffect } from "react";
import TodoAddForm from "../components/todoAddForm/TodoAddForm";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
function Todo() {
  const [post, setPosts] = useState([]);
  const navigation = useNavigate();
  const [isTodoDelete, setIsTodoDelete] = useState(false);

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  [];

  const handleAdd = () => {
    //@ts-ignore
    setPosts([...post, { id: 3, title: "todo3", description: "hello" }]);
  };

  const handleEdit = (id: number) => {
    navigation(`/editTodo/${id}`, { replace: true });
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

  const hadnleInputData = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, id: post.length + 1 });
  };

  const handleSubmit = (e: any) => {
    //@ts-ignore
    setPosts([...post, formData]);
  };
  const handleAddTodo = () => {
    navigation("/addTodo", { replace: true });
  };

  return (
    <>
      <div>
        <div style={{ margin: "16px" }}>
          <Button label="Add Todo" handleClick={handleAddTodo} />
        </div>
        {post?.map((data: any) => (
          <div>
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
