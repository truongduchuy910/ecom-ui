import { gql, useQuery, useApolloClient } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { USER } from "../../apollo/action";
import { newOrderVar } from "../../apollo/client";
import { Item } from "./item";
import { Loading } from "../src/Loading";
export const GET_CART_ITEMS = gql`
  query {
    allOrders(orderBy: "time_DESC") {
      id
      total
      step
      customer {
        id
        name
        phone
        address
      }
      items {
        id
        product {
          name
          url
          image {
            publicUrl
          }
          images {
            file {
              publicUrl
            }
          }
        }
        price
        quantity
        attributes {
          id
          name
          url
        }
      }
    }
  }
`;

export function List() {
  const client = useApolloClient();
  const user = client.readQuery({ query: USER });
  const { data, loading, error, refetch } = useQuery(GET_CART_ITEMS, {
    variables: { seller: { id: user?.id } },
  });
  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;
  let allOrders = data?.allOrders?.length ? data?.allOrders : [];
  const newOrder = newOrderVar();
  if (newOrder) {
    newOrderVar(false);
    try {
      refetch();
    } catch {}
  }

  return allOrders.map((order) => <Item key={order.id} order={order} />);
}
