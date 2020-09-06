import { theme } from "../../config";

export function CountIcon({ count }) {
  return (
    <span
      style={{
        position: "absolute",
        fontSize: 12,
        fontWeight: 500,
        float: "right",
        right: 0,
        display: "inline",
        color: theme.primary,
      }}
    >
      {count}
    </span>
  );
}
