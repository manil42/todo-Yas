import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
function Todo() {
  const [post, setPosts] = useState([]);

  const navigation = useNavigate();

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

  const handleAddTodo = () => {
    navigation("/addTodo", { replace: true });
  };

  const handleEdit = (id: number) => {
    navigation(`editTodo/${id}`, { replace: true });
  };
  const handleDelete = (id: number) => {
    const copyData = [...post];
    const data = copyData.filter((data: any) => data.id !== id);
    setPosts([...data]);
  };

  return (
    <>
      <div>
        <div style={{ margin: "16px" }}>
          <Button label={"Add Todo"} handleClick={handleAddTodo} />
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
