import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export function View() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async function () {
      const req = await fetch("http://localhost:3000/blog/");
      const json = await req.json();
      setPosts(json);
    })();
  }, []);

  console.log(posts);

  async function deletePost(title, content) {
    const requestData = JSON.stringify({title, content});
    const headers = {
      "Accept":"application/json",
      "Content-Type": "application/json"
    };
    const resp = await fetch("http://localhost:3000/blog/delete-post", {
      method: "delete",
      body: requestData,
      headers: headers
    });
  }

  return (
    <div>
      <Link to="/"> Home</Link>
      <div>
        {posts.map((post) => (
          <div
            style={{
              border: "2px solid",
              width: "50vw",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <h2 style={{margin: "0.2rem"}}>{post.title}</h2>
            <div>{post.content}</div>
            <button onClick={() => deletePost(post.title, post.content)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
