import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import post from "../assets/post.jpg";

export default function Home() {
  return (
    <div className="bg home-bg">
      <h2>Connectify</h2>

      <div className="profile">
        <img src={user1} />
        <div>
          <b>James Smith</b>
          <p>gangireddy@email.com</p>
        </div>
      </div>

      <p>This is my first post on Connectify!</p>
      <img src={post} className="post-img" />

      <div className="actions">
        ❤️ 150 &nbsp; 💬 30 &nbsp; 🔗 Share
      </div>

      <hr style={{ margin: "15px 0" }} />

      <div className="profile">
        <img src={user2} />
        <div>
          <b>Sarah Johnson</b>
          <p>Loving this platform 😍</p>
        </div>
      </div>
    </div>
  );
}
