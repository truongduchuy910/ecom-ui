import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";



import { Spinner, Container } from "reactstrap";
import { Loading } from "../src/Loading";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";


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
  const theme = useContext(SellerContext);

  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: theme.seller },
  });

  if (loading) return <Loading />;
  
  return !loading && data
    ? data.allBanners
        .slice(0, 1)
        .map((banner) => <Item key={banner.id} banner={banner} style={style} />)
    : null;
}
