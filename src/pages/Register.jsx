import { useNavigate } from "react-router-dom";
import bgRegister from "../assets/bg-register.jpg";
import "./auth.css";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${bgRegister})` }}
    >
      <div className="auth-card">
        <h2>Register</h2>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/feed")}>
          Register
        </button>
      </div>
    </div>
  );
}
