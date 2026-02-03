import bgHome from "../assets/bg.home.jpg";
import { Link } from "react-router-dom";
import "./auth.css";

export default function Home() {
  return (
    <div
      className="auth-page"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <div className="auth-card">
        <h2>Connectify</h2>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button className="secondary">Register</button>
        </Link>
      </div>
    </div>
  );
}
