import { useContext } from "react";
import { SellerContext } from "./SellerProvider";

export function Logo({ onClick, style }) {
  const theme = useContext(SellerContext);
  return theme?.logo?.publicUrl ? (
    <img
      src={theme?.server + theme?.logo?.publicUrl}
      style={{ ...style, padding: 0 }}
      onClick={onClick}
    />
  ) : null;
}
