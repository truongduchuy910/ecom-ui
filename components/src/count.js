import { useContext } from "react";
import { SellerContext } from "./SellerProvider";

export function CountIcon({ count }) {
  const theme = useContext(SellerContext);
  return (
    <span
      style={{
        position: "absolute",
        fontSize: 12,
        fontWeight: 500,
        float: "right",
        right: 0,
        display: "inline",
        color: theme.primary,
      }}
    >
      {count}
    </span>
  );
}
