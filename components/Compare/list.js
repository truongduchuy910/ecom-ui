import { gql, useQuery } from "@apollo/client";
import { emptyCompare } from "../../apollo/action";
import { Item } from "./item";

export const GET_COMPARE = gql`
  query {
    compare @client
  }
`;

export function List() {
  const { data, loading, error } = useQuery(GET_COMPARE);

  if (loading) return <i>loading...</i>;
  return (
    <div>
      <button color="primary" onClick={emptyCompare}>
        empty compare
      </button>
      {data ? (
        data?.compare?.length ? (
          data.compare.map((product) => (
            <Item key={product.id} product={product} />
          ))
        ) : (
          <p>No products in your compare</p>
        )
      ) : null}
    </div>
  );
}
