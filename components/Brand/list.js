import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { page } from "../../config/yensaodatquang.json";
import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { css } from "../src/css";
const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allBrands(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function List() {
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: page.seller },
  });
  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;
  return !loading && data ? (
    <div>
      <h5 style={css.h5}>Thương Hiệu</h5>
      <Item brand={{ id: "all-brand", name: "Tất Cả ", url: "all" }} />
      {data.allBrands.map((brand) => (
        <Item key={brand.id} brand={brand} style={{ display: "block" }} />
      ))}
    </div>
  ) : null;
}
