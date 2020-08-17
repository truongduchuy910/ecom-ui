import { removeItemOnce } from "../../lib/chip";
import { page } from "../../config";
export function Item({ banner }) {
  return (
    <img src={page.server + banner.file.publicUrl} style={{ width: "100%" }} />
  );
}
