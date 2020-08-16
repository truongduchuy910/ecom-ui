import { useRouter } from "next/router";
import { List as Products } from "../../components/Product/list";

import { toAttributeGourpWhereInput } from "../../lib/chip";
import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Sidebar } from "../../components/Sidebar";
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
    <div>
      <Container>
        <Row>
          <Col md={{ size: 3 }}>
            <Sidebar
              onSearch={(search) => {
                setSearch(search);
              }}
            />
          </Col>
          <Col md={{ size: 9 }}>
            <Products
              category={category}
              brand={brand}
              attributes={attributes}
              price_from={price_from}
              price_to={price_to}
              search={search}
              categories={categories}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Index;
