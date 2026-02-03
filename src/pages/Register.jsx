export default function Register() {
  return (
    <div className="bg register-bg">
      <h2>Connectify</h2>
      <input placeholder="Username" />
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Register</button>
      <div className="link">Already have an account? Login</div>
    </div>
  );
}
