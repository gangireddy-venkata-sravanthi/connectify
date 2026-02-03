export default function StoryBar() {
  return (
    <div style={{ display: "flex", gap: 10, overflowX: "auto", marginBottom: 10 }}>
      {["You", "Alice", "Bob", "Carol"].map((name) => (
        <div
          key={name}
          style={{
            minWidth: 60,
            height: 60,
            borderRadius: "50%",
            background: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
