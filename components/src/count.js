export function CountIcon({ count }) {
  return (
    <span
      style={{
        position: "absolute",
        textAlign: "center",
        borderRadius: "50%",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      ({count})
    </span>
  );
}
