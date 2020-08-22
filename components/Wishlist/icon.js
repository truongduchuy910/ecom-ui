import { gql, useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { WISHLIST } from "../../apollo/action";
import { IoIosHeartEmpty } from "react-icons/io";
import { CountIcon } from "../src/count";
export function Icon({ onClick }) {
  const { data, loading, error } = useQuery(WISHLIST);
  return data?.wishlist?.length ? (
    <Link href="/wishlist">
      <a style={{ marginRight: 34 }} onClick={onClick}>
        <IoIosHeartEmpty /> <CountIcon count={data?.wishlist?.length} />
      </a>
    </Link>
  ) : null;
}
