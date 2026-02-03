import { useNavigate } from "react-router-dom";
import bgLogin from "../assets/bg-login.jpg";
import "./auth.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="auth-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/feed")}>
          Login
        </button>
      </div>
    </div>
  );
}
