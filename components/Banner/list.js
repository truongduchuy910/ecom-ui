import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { queryVar } from "../../apollo/action";
import { page } from "../../config";
import { Spinner } from "reactstrap";
import { Loading } from "../src/Loading";
const GET_ATTRIBUTES = gql`
  query($seller: UserWhereInput) {
    allBanners(where: { seller: $seller }) {
      id
      file {
        publicUrl
      }
    }
  }
`;
export function List() {
  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: page.seller },
  });
  if (loading) return <Loading/>;
  return !loading && data ? (
    <div>
      {data.allBanners.slice(0, 1).map((banner) => (
        <Item key={banner.id} banner={banner} />
      ))}
    </div>
  ) : null;
}
