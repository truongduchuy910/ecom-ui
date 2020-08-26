import { gql, useQuery } from "@apollo/client";
import { emptyCompare } from "../../apollo/action";
import { Loading } from "../src/Loading";
import { Item } from "../Product/compareItem";
import theme from "../src/theme";
export const GET_COMPARE = gql`
  query {
    compare @client
  }
`;

export function List() {
  const { data, loading, error } = useQuery(GET_COMPARE);
  if (loading) return <Loading />;
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        padding: theme.spacing(3),
      }}
    >
      {/* <button color="primary" onClick={emptyCompare}>
        Xóa Tất Cả
      </button> */}
      {data ? (
        data?.compare?.length ? (
          data.compare.map((product) => (
            <Item key={product.id} product={product} />
          ))
        ) : (
          <p>Không có sản phẩm</p>
        )
      ) : null}
    </div>
  );
}
