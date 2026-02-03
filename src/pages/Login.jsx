export default function Login() {
  return (
    <div className="bg login-bg">
      <h2>Connectify</h2>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Login</button>
      <div className="link">New user? Register here</div>
    </div>
  );
}
