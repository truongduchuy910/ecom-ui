import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Link } from "../src/Link";
import { queryVar } from "../../apollo/action";
import { page } from "../../config/index";



import { Spinner, Alert } from "reactstrap";
import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { css } from "../src/css";
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
  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: page.seller },
  });

  if (loading) return <Loading />;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div>
      <h5 style={css.h5}>Thuộc Tính</h5>
      <Item attribute={{ id: "all-attribute", name: "Tất Cả", url: "all" }} />
      {source.map((attribute) => (
        <Item key={attribute.id} attribute={attribute} />
      ))}
    </div>
  ) : null;
}
