import { page } from "../../config.json";
export function Logo() {
  return (
    <img src={page.logo} style={{ maxWidth: 50, padding: 0, margin: 0 }} />
  );
}
