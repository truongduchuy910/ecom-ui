import { theme } from "../../config";

export function CountIcon({ count }) {
  return (
    <span
      style={{
        position: "absolute",
        textAlign: "center",
        borderRadius: "50%",
        fontSize: 12,
        fontWeight: 500,
        color: theme.primary,
      }}
    >
      {count}
    </span>
  );
}
