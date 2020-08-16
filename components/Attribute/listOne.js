// show in product detail
import { gql, useQuery } from "@apollo/client";
import { Item } from "./itemOne";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { queryVar } from "../../apollo/action";
import { page } from "../../config";
import { Spinner, Alert } from "reactstrap";
import { getErrorMessage } from "../../lib/chip";
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

  if (loading) return <i>loading...</i>;
  if (error) return <i color="danger">{getErrorMessage(error)}</i>;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div>
      {source.map((attribute) => (
        <Item key={attribute.id} attribute={attribute} />
      ))}
    </div>
  ) : null;
}
