import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";

import { page } from "../../config/index";

import { Spinner, Container } from "reactstrap";
import { Loading } from "../src/Loading";
import { theme } from "../../config/index";

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
export function ListBanner({ style }) {
  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: page.seller },
  });
  if (loading) return <Loading />;
  return !loading && data
    ? data.allBanners
        .slice(0, 1)
        .map((banner) => <Item key={banner.id} banner={banner} style={style} />)
    : null;
}
