import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { COMPARE } from "../../apollo/action";
import { MdCompareArrows } from "react-icons/md";
import { CountIcon } from "../src/count";
import { Link } from "../src/Link";
export function Icon({ onClick, style }) {
  const { data, loading, error } = useQuery(COMPARE);
  if (error) return <i>{getErrorMessage(error)}</i>;
  if (loading) return <i>...</i>;
  return data?.compare?.length ? (
    <Link href="/compare" style={style}>
      <MdCompareArrows />
      <CountIcon count={data.compare.length} />
    </Link>
  ) : null;
}
