import { gql, useQuery, useMutation, useApolloClient } from "@apollo/client";
import Link from "next/link";
import { newOrderCountVar } from "../../apollo/action";
import { USER } from "../../apollo/action";
const ORDER_COUNT = gql`
  query {
    user @client
    _allOrdersMeta {
      count
    }
  }
`;
export function Icon() {
  let data;
  const { data: orderData, refetch } = useQuery(ORDER_COUNT);
  data = orderData;

  const newOrderCount = newOrderCountVar();
  if (newOrderCount) {
    try {
      refetch();
    } catch {}
    newOrderCountVar(false);
  }
  return data?.user?.id ? (
    <Link href="/order">
      <a>order ({data?._allOrdersMeta?.count})</a>
    </Link>
  ) : null;
}
