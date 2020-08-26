import { removeItemOnce } from "../../lib/chip";
import { page } from "../../config/index";

import { FadeIn } from "../Animations/FadeIn";
import theme from "../src/theme";
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
          borderRadius: theme.spacing(2),
        }}
      ></div>
    </FadeIn>
  );
}
