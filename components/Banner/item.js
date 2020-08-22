import { removeItemOnce } from "../../lib/chip";
import { page } from "../../config/yensaodatquang.json";
import { FadeIn } from "../Animations/FadeIn";
export function Item({ banner }) {
  return (
    <FadeIn>
      <div
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${page.server + banner.file.publicUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "inherit",
        }}
      ></div>
    </FadeIn>
  );
}
