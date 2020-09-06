import { removeItemOnce } from "../../lib/chip";
import { page } from "../../config/index";

import { FadeIn } from "../Animations/FadeIn";
import { theme } from "../../config/index";

export function Item({ style, banner }) {
  return (
    <FadeIn>
      <div
        style={{
          ...style,
          width: "100%",
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
