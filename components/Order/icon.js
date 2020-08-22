import { gql, useQuery, useMutation, useApolloClient } from "@apollo/client";
import Link from "next/link";
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
export function Icon({ onClick }) {
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
    <Link href="/order">
      <a style={{ marginRight: 34 }} onClick={onClick}>
        <FiPackage /> <CountIcon count={data?._allOrdersMeta?.count} />
      </a>
    </Link>
  ) : null;
}
