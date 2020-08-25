import { page } from "../../config/yensaodatquang.json";
export function Logo({ onClick, style }) {
  return (
    <img
      src={page.logo}
      style={{ ...style, padding: 0, margin: 0 }}
      onClick={onClick}
    />
  );
}
