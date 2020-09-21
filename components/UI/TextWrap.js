import { theme } from "../../config";

export const TextWrap = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 600, padding: theme.spacing(4) }}>
        {children}
      </div>
    </div>
  );
};
