import { useRouter } from "next/router";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Categories from "../components/Category";
import Products from "../components/Product/List/index";
import Item from "../components/Product/Item/index";
import Attributes from "../components/Attribute";
import Brands from "../components/Brand";
export default function ProductDetali() {
  const router = useRouter();
  const query = router.query;
  const { category, attribute, brand } = query;
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Categories
              onChoose={(category) => {
                query.category = category.url;
                router.push({
                  pathname: "/products",
                  query,
                });
              }}
            />
            <Attributes
              onChoose={(attribute) => {
                query.attribute = attribute.url;
                router.push({
                  pathname: "/products",
                  query,
                });
              }}
            />
            <Brands
              onChoose={(brand) => {
                query.brand = brand.url;
                router.push({
                  pathname: "/products",
                  query,
                });
              }}
            />
          </Col>
          <Col>
            <Products
              ProductWhereInput={{ OR: [{ category: { url: category } }] }}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
