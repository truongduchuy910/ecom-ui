import { gql, useQuery } from "@apollo/client";
import { emptyCompare } from "../../apollo/action";
import { Item } from "./item";
import { Loading } from "../src/Loading";
import { QuickView } from "../Product/quickView";
export const GET_COMPARE = gql`
  query {
    compare @client
  }
`;

export function List() {
  const { data, loading, error } = useQuery(GET_COMPARE);
  if (loading) return <Loading />;
  return (
    <div>
      {/* <button color="primary" onClick={emptyCompare}>
        Xóa Tất Cả
      </button> */}
      {data ? (
        data?.compare?.length ? (
          data.compare.map((product) => (
            <QuickView key={product.id} product={product} />
          ))
        ) : (
          <p>Không có sản phẩm</p>
        )
      ) : null}
    </div>
  );
}
