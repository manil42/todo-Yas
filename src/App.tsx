import { useState, useEffect } from "react";
import AssignmentCard from "./components/AssignmentCard/AssignmentCard";

function App() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  [];
  console.log(post);

  const handleEdit = () => {
console.log('this is edit button')
  };
  const handleDelete = () => {
console.log('this is delete button')
  };
  return (
    <>
      <div>
        {post?.map((data: any) => (
          // <div style={{border:"solid 1px black"}}>
          // <h1>{data.title}</h1>
          // <p>{data.description}</p>
          // </div>
          <div>
            <AssignmentCard
              title={data.title}
              description={data.description}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
