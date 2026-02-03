import { useState } from "react";
import StoryBar from "../components/StoryBar";
import Post from "../components/Post";
import BottomNav from "../components/BottomNav";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "alice",
      profileImage: "https://i.pravatar.cc/50?img=1",
      image: "https://picsum.photos/id/1011/400/300",
      caption: "Enjoying the view 🌄",
      comments: [],
    },
    {
      id: 2,
      username: "bob",
      profileImage: "https://i.pravatar.cc/50?img=2",
      image: "https://picsum.photos/id/1025/400/300",
      caption: "Cute puppy 🐶",
      comments: [],
    },
  ]);

  const addPost = () => {
    const newPost = {
      id: Date.now(),
      username: "you",
      profileImage: "https://i.pravatar.cc/50?img=8",
      image: "https://picsum.photos/400/300?random=" + Math.random(),
      caption: "New post ✨",
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <div className="feed-page">
        <StoryBar />

        <button className="create-post" onClick={addPost}>
          ➕ Create Post
        </button>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <BottomNav />
    </>
  );
}
