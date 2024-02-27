import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
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

  return (
    <>
      <div>
        {post?.map((data: any) => (
          // <div style={{border:"solid 1px black"}}>
          // <h1>{data.title}</h1>
          // <p>{data.description}</p>
          // </div>
          <div>
            <Card />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
