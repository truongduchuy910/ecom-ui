import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { getErrorMessage } from "../../lib/chip";
import { COMPARE } from "../../apollo/action";
export function Icon() {
  const { data, loading, error } = useQuery(COMPARE);
  if (error) return <i>{getErrorMessage(error)}</i>;
  if (loading) return <i>...</i>;
  return data?.compare?.length ? (
    <Link href="/compare">
      <a>Compare ({data.compare.length})</a>
    </Link>
  ) : null;
}
