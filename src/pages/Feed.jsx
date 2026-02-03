export default function Feed() {
  return (
    <div className="feed-page">
      <div className="post-card">
        <h3>James Smith</h3>
        <p>This is my first post on Connectify</p>

        <img src="/post.jpg" className="post-img" />

        <div className="actions">
          ❤️ Like &nbsp; 💬 Comment &nbsp; 📩 Message
        </div>
      </div>
    </div>
  );
}
