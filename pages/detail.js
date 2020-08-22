import { List as Products } from "../components/Product/list";
import { Container, Spinner } from "reactstrap";
import { Product } from "../components/Product/detail";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Loading } from "../components/src/Loading";
import { Divider } from "../components/src/Divider";
const GET_PRODUCTS = gql`
  query($url: String) {
    allProducts(first: 1, where: { url: $url }) {
      id
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
  const { url } = router.query;
  let { data, error, loading } = useQuery(GET_PRODUCTS, {
    variables: { url: url },
  });

  if (error) return <i>{error}</i>;
  if (loading) return <Loading />;
  const product = data?.allProducts?.length ? data.allProducts[0] : null;
  return product ? (
    <Container>
      <Product product={product} />
      <h4>Sản Phẩm Liên Quan</h4>
      <Divider />
      <Products category={product.category.url} except={url} more={false} />
    </Container>
  ) : null;
}
