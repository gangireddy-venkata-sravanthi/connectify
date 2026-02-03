import { useState } from "react";

export default function Post({ post }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const addComment = () => {
    if (!commentText.trim()) return;
    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div className="post-card">
      {/* Profile Header */}
      <div className="post-header">
        <img src={post.profileImage} alt="profile" />
        <span>@{post.username}</span>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="post" className="post-image" />

      <p className="caption">{post.caption}</p>

      {/* Actions */}
      <div className="post-actions">
        <button onClick={handleLike}>
          {liked ? "❤️" : "🤍"} {likes}
        </button>

        <button onClick={() => setShowComments(!showComments)}>
          💬 {comments.length}
        </button>

        <button onClick={() => alert("Post shared!")}>🔗</button>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="comments-section">
          {comments.map((c, i) => (
            <p key={i} className="comment">
              💬 {c}
            </p>
          ))}

          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={addComment}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
}
