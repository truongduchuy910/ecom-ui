import { gql, useQuery } from "@apollo/client";
import { useRouter, withRouter } from "next/router";
import { Item } from "./item";
import { Fragment } from "react";
import Link from "next/link";
import { queryVar } from "../../apollo/action";
import { route } from "next/dist/next-server/server/router";
import { page } from "../../config.json";
import { Spinner, Alert } from "reactstrap";
import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
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
      <h5>Thương Hiệu</h5>
      <Item brand={{ id: "all-brand", name: "Tất Cả ", url: "all" }} />
      {data.allBrands.map((brand) => (
        <Item key={brand.id} brand={brand} />
      ))}
    </div>
  ) : null;
}