import { gql, useQuery, useMutation, useApolloClient } from "@apollo/client";
import { Link } from "../src/Link";
import { newOrderCountVar } from "../../apollo/client";
import { USER } from "../../apollo/action";
import { FiPackage } from "react-icons/fi";
import { CountIcon } from "../src/count";
const ORDER_COUNT = gql`
  query {
    user @client
    _allOrdersMeta {
      count
    }
  }
`;
export function Icon({ onClick, style }) {
  let data;
  const { data: orderData, refetch, error } = useQuery(ORDER_COUNT);
  data = orderData;

  const newOrderCount = newOrderCountVar();
  if (newOrderCount) {
    try {
      refetch();
    } catch {}
    newOrderCountVar(false);
  }
  return data?.user?.id && data?._allOrdersMeta?.count ? (
    <Link href="/order" style={{ position: "relative" }} onClick={onClick}>
      <FiPackage style={style} />
      <CountIcon count={data?._allOrdersMeta?.count} />
    </Link>
  ) : null;
}
