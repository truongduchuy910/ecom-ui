import { page } from "../../config.json";
export function Logo({ onClick }) {
  return (
    <img
      src={page.logo}
      style={{ maxWidth: 50, padding: 0, margin: 0 }}
      onClick={onClick}
    />
  );
}
