import "./auth.css";
import bgRegister from "../assets/bg-register.jpg";
import { Link } from "react-router-dom";

export default function Register() {
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

        <button>Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
