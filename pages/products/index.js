import { useRouter } from "next/router";
import { List as Products } from "../../components/Product/list";

import { toAttributeGourpWhereInput } from "../../lib/chip";
import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Sidebar } from "../../components/Sidebar";
import { BirdBg } from "../../components/src/BirdBg";
import { Divider } from "../../components/src/Divider";
import { theme } from "../../config.json";
import { Filter } from "../../components/Sidebar/filter";
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
      style={{
        backgroundColor: theme.backgroundColor,
        marginTop: 15,
        borderRadius: 8,
      }}
    >
      <Divider />
      <Row>
        <Col xs={4} md={3} lg={3}>
          <Sidebar
            onSearch={(search) => {
              setSearch(search);
            }}
          />
        </Col>
        <Col xs={8} md={9} lg={9}>
          <Filter
            category={category}
            categories={categories}
            brand={brand}
            search={search}
            price_from={price_from}
            price_to={price_to}
            attributes={query.attributes ? query.attributes.split(",") : []}
          />
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
