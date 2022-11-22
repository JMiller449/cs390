import {useState} from "react";
import {Link} from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pass, setPass] = useState("");
  const [done, setDone] = useState(false);

  async function sendBlogPostDetails(requestData, header) {
    if (pass === "password") {
      const resp = await fetch("http://localhost:3000/blog/create-post", {
        method: "post",
        body: requestData,
        headers: header
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({title, content});
    const headers = {
      "Accept":"application/json",
      "Content-Type": "application/json"
    };

    sendBlogPostDetails(requestData, headers);
    setDone(true);

    console.log(requestData);
  }
  if (done) {
    if (pass == "password") {
      return (
        <div>
          <Link to="/view">Check out your blog post</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/view">Not Authorized to blog post</Link>
        </div>
      );
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <input
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.currentTarget.value)}
      />
      <div/>
      <button>Post</button>
    </form>
  );
}
