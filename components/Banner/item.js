import { removeItemOnce } from "../../lib/chip";
import { page } from "../../config.json";
import { FadeIn } from "../Animations/FadeIn";
export function Item({ banner }) {
  return (
    <FadeIn>
      <img
        src={page.server + banner.file.publicUrl}
        style={{ width: "100%" }}
      />
    </FadeIn>
  );
}
