import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { getErrorMessage } from "../../lib/chip";
import { COMPARE } from "../../apollo/action";
import { MdCompareArrows } from "react-icons/md";
import { CountIcon } from "../src/count";
export function Icon({ onClick }) {
  const { data, loading, error } = useQuery(COMPARE);
  if (error) return <i>{getErrorMessage(error)}</i>;
  if (loading) return <i>...</i>;
  return data?.compare?.length ? (
    <Link href="/compare">
      <a
        style={{
          marginRight: 34,
        }}
        onClick={onClick}
      >
        <MdCompareArrows />
        <CountIcon count={data.compare.length} />
      </a>
    </Link>
  ) : null;
}
