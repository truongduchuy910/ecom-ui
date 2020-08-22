import { useState, useEffect, Fragment } from "react";
import { gql, useQuery, rewriteURIForGET } from "@apollo/client";
import { useRouter, withRouter, Router } from "next/router";
import { Item as Product } from "./item";
import { Container, Row, Col, Spinner } from "reactstrap";
import { page } from "../../config/yensaodatquang.json";
import { toSlug } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { Divider } from "../src/Divider";

const GET_PRODUCTS = gql`
  query(
    $first: Int
    $skip: Int
    $attributes: AttributeGroupWhereInput
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
          { attributeGroups_some: $attributes }
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
      price
      sale
      attributeGroups {
        id
        name
        attributes {
          id
          name
          url
        }
      }
      url
    }
  }
`;
export const List = ({
  first = 12,
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
  sm,
  md,
  lg,
  more = true,
  search,
  except,
}) => {
  let variables = {
    first,
    skip,
    category,
    categories,
    brand: brand ? { url_contains: brand } : null,
    attributes,
    orderBy,
    suggestions,
    seller: page.seller,
    price_from,
    price_to: price_to ? price_to : 999999999,
    except,
  };
  if (search) variables.keyword = toSlug(search);
  if (sale) variables.sale_gt = 0;
  let { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables,
  });
  function loadingMore() {
    const count = data?.allProducts?.length;
    variables.skip = count;
    try {
      fetchMore({
        variables,
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          return Object.assign({}, prev, {
            allProducts: [...prev.allProducts, ...fetchMoreResult.allProducts],
          });
        },
      });
    } catch (e) {}
  }
  if (error) return <i>{error}</i>;
  if (loading) return <Loading />;
  return data?.allProducts?.length ? (
    <section id="products">
      <Row noGutters style={{ borderRadius: 8 }}>
        {data.allProducts.map((product) => (
          <Col
            style={{ padding: 8 }}
            key={product.id}
            xs={sm ? sm : { size: 6 }}
            md={md ? md : { size: 4 }}
            lg={lg ? lg : { size: 3 }}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
      {more ? (
        <center>
          <Divider />
          <button onClick={loadingMore} style={{ width: 200 }}>
            Xem thêm
          </button>
        </center>
      ) : null}
    </section>
  ) : (
    <p style={{ textAlign: "center" }}>Không có kết quả!</p>
  );
};
