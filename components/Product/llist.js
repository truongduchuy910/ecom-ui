import { useState, useEffect, Fragment, useContext } from "react";
import { gql, useQuery, rewriteURIForGET } from "@apollo/client";
import { Item as Product } from "./item";
import { Container, Row, Col, Spinner } from "reactstrap";

import { toSlug } from "../../lib/chip";
import { Loading } from "../src/Loading";

import { MoreProducts } from "../UI/moreProducts";

import { SellerContext } from "../src/SellerProvider";
const GET_PRODUCTS = gql`
  query(
    $first: Int
    $skip: Int
    $category: String
    $categories: [String]
    $brand: BrandWhereInput
    $orderBy: String
    $suggestions: ProductSuggestionType
    $seller: UserWhereInput
    $sale_gt: Int
    $price_from: Int
    $price_to: Int
    $keyword: String
    $except: String
  ) {
    allProducts(
      first: $first
      skip: $skip
      where: {
        AND: [
          { url_contains: $keyword }
          { category: { OR: [{ url: $category }, { url_in: $categories }] } }
          { brand: $brand }
          { suggestions: $suggestions }
          { seller: $seller }
          { sale_gt: $sale_gt }
          { price_gt: $price_from }
          { price_lt: $price_to }
          { url_not: $except }
        ]
      }
      orderBy: $orderBy
    ) {
      id
      name
      description
      image {
        publicUrl
      }
      images {
        file {
          publicUrl
        }
      }
      altImages
      price
      sale
      url
    }
  }
`;
export const List = ({
  title = "",
  first = 4,
  skip = 0,
  category,
  categories,
  brand = "",
  attributes,
  orderBy,
  suggestions,
  sale,
  price_from = 0,
  price_to,
  xs,
  sm,
  md,
  lg,
  xl,
  more = true,
  search,
  except,
  center,
}) => {
  const theme = useContext(SellerContext);
  let variables = {
    first,
    skip,
    category,
    categories,
    brand: brand ? { url_contains: brand } : null,
    attributes,
    orderBy,
    suggestions,
    seller: theme.seller,
    price_from,
    price_to: price_to ? price_to : 999999999,
    except,
  };
  if (search) variables.keyword = toSlug(search);
  if (sale) variables.sale_gt = 0;
  let { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables,
  });
  let [on, setOn] = useState(true);
  let width = 0;
  useEffect(() => {
    // fetch more data
    if (more) {
      const productsEle = document.getElementById("products");
      // hight of element - scrollTop < window height ?
      const alpha = () =>
        productsEle?.clientHeight -
        document.scrollingElement.scrollTop -
        window.innerHeight +
        150;
      // loading done
      let al = alpha();
      if (al > 0) setOn(false);
      if (on && !loading && al < 0) {
        loadingMore();
      }

      window.onscroll = () => {
        if (alpha() < 0 && !on) setOn(true);
      };
    }
    if (!width) width = window.innerWidth;
  });
  function loadingMore() {
    const count = data?.allProducts?.length;
    variables.skip = count;
    try {
      fetchMore({
        variables,
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.allProducts?.length) {
            return prev;
          }
          return Object.assign({}, prev, {
            allProducts: [...prev.allProducts, ...fetchMoreResult.allProducts],
          });
        },
      });
    } catch (e) {}
  }
  if (error || loading)
    return (
      <div style={{ margin: theme.spacing(3) }}>
        <Loading />
      </div>
    );
  return data?.allProducts?.length ? (
    <section
      id="products"
      style={{
        paddingLeft: theme.spacing(2),
      }}
    >
      {title ? (
        <h2
          style={{
            ...theme.css.h2,
            textAlign: "center",
            marginBottom: theme.spacing(5),
          }}
        >
          {title}
        </h2>
      ) : null}
      <Row noGutters style={{ display: "flex", justifyContent: "center" }}>
        {data.allProducts.map((product) => (
          <Col
            key={product.id}
            xs={data?.allProducts?.length > 2 ? (xs ? xs : 6) : 12}
            sm={data?.allProducts?.length > 2 ? (sm ? sm : 6) : 6}
            md={data?.allProducts?.length > 2 ? (md ? md : 4) : 4}
            lg={data?.allProducts?.length > 2 ? (lg ? lg : 3) : 3}
            xl={data?.allProducts?.length > 2 ? (xl ? xl : 2) : 3}
            style={{
              padding: width <= 768 && width != 0 ? 3 : theme.spacing(2),
              paddingTop: 0,
            }}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </section>
  ) : (
    <p style={{ textAlign: "center" }}>Không có kết quả!</p>
  );
};
