import postImg from "../assets/post.jpg";

const Info = () => {
  return (
    <div className="page-center">
      <div style={{ width: "400px" }}>
        
        {/* POST CARD */}
        <div className="card" style={{ marginBottom: "20px" }}>
          <h3>User Post</h3>

          <img
            src={postImg}
            alt="post"
            style={{ width: "100%", borderRadius: "10px", margin: "10px 0" }}
          />

          <p>Enjoying a beautiful day 🌄</p>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            fontSize: "20px",
            cursor: "pointer"
          }}>
            <span>❤️ Like</span>
            <span>💬 Comment</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Info;
