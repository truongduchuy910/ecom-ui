import { gql, useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { WISHLIST } from "../../apollo/action";

export function Icon() {
  const { data, loading, error } = useQuery(WISHLIST);
  return data?.wishlist?.length ? (
    <Link href="/wishlist">
      <a>wishlist ({data?.wishlist?.length})</a>
    </Link>
  ) : null;
}
