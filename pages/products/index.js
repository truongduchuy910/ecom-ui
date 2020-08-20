import { useRouter } from "next/router";
import { List as Products } from "../../components/Product/list";

import { toAttributeGourpWhereInput } from "../../lib/chip";
import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Sidebar } from "../../components/Sidebar";
import { BirdBg } from "../../components/src/BirdBg";
import { Divider } from "../../components/src/Divider";
const Index = () => {
  const router = useRouter();
  let query = router.query;
  const category = query.category;
  const categories = query.categories;
  const brand = query.brand;
  const search = query.search;
  const price_from = query.price_from ? Number(query.price_from) : 0;
  const price_to = query.price_to ? Number(query.price_to) : 999999999;
  const attributes = toAttributeGourpWhereInput(
    query.attributes ? query.attributes.split(",") : []
  );

  return (
    <Container
      style={{ backgroundColor: "white", marginTop: 15, borderRadius: 8 }}
    >
      <Divider />
      <Row>
        <Col md={{ size: 3 }} lg={{ size: 3 }}>
          <Sidebar
            onSearch={(search) => {
              setSearch(search);
            }}
          />
        </Col>
        <Col md={{ size: 9 }} lg={{ size: 9 }}>
          <Products
            sm={6}
            lg={4}
            category={category}
            categories={categories}
            brand={brand}
            search={search}
            price_from={price_from}
            price_to={price_to}
            attributes={attributes}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Index;
