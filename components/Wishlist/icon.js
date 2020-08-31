import { gql, useQuery, useMutation } from "@apollo/client";
import { WISHLIST } from "../../apollo/action";
import { IoIosHeartEmpty } from "react-icons/io";
import { CountIcon } from "../src/count";
import { Link } from "../src/Link";
import { FiThermometer } from "react-icons/fi";
import { theme } from "../../config";
export function Icon({ onClick, style }) {
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
