import { page } from "../../config/index";

export function Logo({ onClick, style }) {
  return (
    <img
      src={page.logo}
      style={{ ...style, padding: 0, maxWidth: 40 }}
      onClick={onClick}
    />
  );
}
