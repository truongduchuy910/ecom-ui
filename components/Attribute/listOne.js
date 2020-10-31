// show in product detail
import { gql, useQuery } from "@apollo/client";
import { Item } from "./itemOne";
import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
const GET_ATTRIBUTES = gql`
  query($seller: UserWhereInput) {
    allAttributes(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function List({ attributes }) {
  const theme = useContext(SellerContext);
  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: theme.seller },
  });

  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div style={{ display: "inline-block" }}>
      {source.map((attribute) => (
        <Item key={attribute.id} attribute={attribute} />
      ))}
    </div>
  ) : null;
}
