import { Link } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/feed">🏠</Link>
      <Link to="/likes">❤️</Link>
      <Link to="/messages">💬</Link>
      <Link to="/settings">⚙️</Link>
    </nav>
  );
}
