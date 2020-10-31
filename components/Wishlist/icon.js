import { gql, useQuery, useMutation } from "@apollo/client";
import { WISHLIST } from "../../apollo/action";
import { IoIosHeartEmpty } from "react-icons/io";
import { CountIcon } from "../src/count";
import { Link } from "../src/Link";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";

export function Icon({ onClick, style }) {
  const theme = useContext(SellerContext);
  const { data, loading, error } = useQuery(WISHLIST);
  if (loading || error || !data) return null;
  const count = data?.wishlist?.length;
  return (
    <Link href="/wishlist" onClick={onClick} style={{ position: "relative" }}>
      <IoIosHeartEmpty style={{ ...style }} />{" "}
      {count ? <CountIcon count={count} /> : null}
    </Link>
  );
}
