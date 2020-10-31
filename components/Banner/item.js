import { removeItemOnce } from "../../lib/chip";


import { FadeIn } from "../Animations/FadeIn";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";


export function Item({ style, banner }) {
  const theme = useContext(SellerContext);

  return (
    <FadeIn>
      <div
        style={{
          ...style,
          width: "100%",
          backgroundImage: `url(${theme.server + banner.file.publicUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "inherit",
          borderRadius: theme.spacing(2),
        }}
      ></div>
    </FadeIn>
  );
}
