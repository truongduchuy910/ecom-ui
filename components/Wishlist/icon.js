import { gql, useQuery, useMutation } from "@apollo/client";
import { WISHLIST } from "../../apollo/action";
import { IoIosHeartEmpty } from "react-icons/io";
import { CountIcon } from "../src/count";
import { Link } from "../src/Link";
import { FiThermometer } from "react-icons/fi";
import { theme } from "../../config";
export function Icon({ onClick, style }) {
  const { data, loading, error } = useQuery(WISHLIST);
  return data?.wishlist?.length ? (
    <Link href="/wishlist" style={{ ...style }} onClick={onClick}>
      <IoIosHeartEmpty style={{ color: theme.primary }} />{" "}
      <CountIcon count={data?.wishlist?.length} />
    </Link>
  ) : null;
}
