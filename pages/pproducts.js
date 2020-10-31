import { useRouter } from "next/router";
import { List as Products } from "../components/Product/list";

import { toAttributeGourpWhereInput } from "../lib/chip";
import { useState, useEffect, Fragment, useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { Sidebar } from "../components/Sidebar";

import { Filter } from "../components/Product/filter";
import { SellerContext } from "../components/src/SellerProvider";

const Index = () => {
  const theme = useContext(SellerContext);
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
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "60vh",
          background: `url(${theme.server + theme.file?.publicUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <Container fluid>
        <Row noGutters style={{ paddingTop: theme.spacing(4) }}>
          <Col xs={4} md={3} lg={3} xl={2}>
            <Sidebar
              onSearch={(search) => {
                setSearch(search);
              }}
            />
          </Col>
          <Col xs={8} md={9} lg={9} xl={10}>
            <Filter
              category={category}
              categories={categories}
              brand={brand}
              search={search}
              price_from={price_from}
              price_to={price_to}
              attributes={query.attributes ? query.attributes.split(",") : []}
            />
            {category ||
            categories ||
            brand ||
            search ||
            price_from ||
            price_to != 999999999 ||
            attributes ? (
              <Products
                sm={6}
                lg={4}
                xl={3}
                category={category}
                categories={categories}
                brand={brand}
                search={search}
                price_from={price_from}
                price_to={price_to}
                attributes={attributes}
              />
            ) : (
              <Fragment>
                <div style={theme.css.filter}>
                  <h6
                    style={{
                      display: "inline-block",
                      margin: 0,
                      textTransform: "uppercase",
                      color: theme.primary,
                    }}
                  >
                    Khuyến Mãi
                  </h6>
                </div>
                <Products sm={6} lg={4} xl={3} sale />
                <div style={theme.css.filter}>
                  <h6
                    style={{
                      display: "inline-block",
                      margin: 0,
                      textTransform: "uppercase",
                      color: theme.primary,
                    }}
                  >
                    Bán Chạy
                  </h6>
                </div>
                <Products sm={6} lg={4} xl={3} suggestions="bestSeller" />
              </Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Index;
