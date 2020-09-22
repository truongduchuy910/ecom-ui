import { List as Products } from "../components/Product/list";
import { Container } from "reactstrap";
import { Product } from "../components/Product/detail";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Loading } from "../components/src/Loading";
import { css } from "../components/src/css";

import { useEffect } from "react";
const GET_PRODUCTS = gql`
  query($url: String) {
    allProducts(first: 1, where: { url: $url }) {
      id
      url
      image {
        publicUrl
      }
      name
      price
      sale
      images {
        file {
          publicUrl
        }
      }
      brand {
        name
        url
      }
      category {
        name
        url
      }
      description
      file {
        publicUrl
      }
      guide
      attributeGroups {
        id
        name
        attributes {
          id
          name
          url
        }
      }
    }
  }
`;
export default function ProductDetali() {
  const router = useRouter();
  const { detail } = router.query;
  let { data, error, loading } = useQuery(GET_PRODUCTS, {
    variables: { url: detail },
  });
  useEffect(() => {
    if (data)
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  });
  if (error || loading) return <Loading />;
  const product = data?.allProducts?.length ? data.allProducts[0] : null;

  return product ? (
    <Container>
      <Product product={product} />
      <h5 style={css.h5}>Sản Phẩm Liên Quan</h5>
      <Products category={product.category.url} except={detail} more={false} />
    </Container>
  ) : null;
}
