import { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const addPost = () => {
    if (!text) return;
    setPosts([{ text, likes: 0 }, ...posts]);
    setText("");
  };

  return (
    <div className="bg">
      <div className="feed">
        <div className="card">
          <input
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addPost}>Post</button>
        </div>

        {posts.map((p, i) => (
          <div className="post" key={i}>
            <strong>User</strong>
            <p>{p.text}</p>

            <div className="icons">
              ❤️ {p.likes}
              💬
              ✉️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
