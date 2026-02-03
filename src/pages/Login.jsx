import "./auth.css";
import bgLogin from "../assets/bg-login.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="auth-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p>
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
