import { useRouter } from "next/router";
import { List as Products } from "../components/Product/list";

import { toAttributeGourpWhereInput } from "../lib/chip";
import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Sidebar } from "../components/Sidebar";
import { BirdBg } from "../components/src/BirdBg";
import { Divider } from "../components/src/Divider";
import theme from "../components/src/theme";
import { Filter } from "../components/Sidebar/filter";
import { List as Banners } from "../components/Banner/list";
import { css } from "../components/src/css";
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
    <Fragment>
      <Banners />

      <Container
        style={{
          marginTop: 15,
          padding: 0,
          backgroundColor: theme.backgroundColor,
        }}
      >
        <Row noGutters>
          <Col
            xs={4}
            md={3}
            lg={3}
            // xl={2}
            style={{
              borderRight: `1.1px solid ${theme.secondary}`,
            }}
          >
            <div
              style={{
                padding: theme.spacing(2),
              }}
            >
              <Sidebar
                onSearch={(search) => {
                  setSearch(search);
                }}
              />
            </div>
          </Col>
          <Col xs={8} md={9} lg={9}>
            <div
              style={{
                padding: theme.spacing(2),
              }}
            >
              {category ||
              categories ||
              brand ||
              search ||
              attributes ||
              price_from ||
              price_to != 999999999 ? (
                <Fragment style={{ padding: theme.spacing(2) }}>
                  <Filter
                    category={category}
                    categories={categories}
                    brand={brand}
                    search={search}
                    price_from={price_from}
                    price_to={price_to}
                    attributes={
                      query.attributes ? query.attributes.split(",") : []
                    }
                  />
                  <Products
                    sm={6}
                    lg={4}
                    xl={2}
                    category={category}
                    categories={categories}
                    brand={brand}
                    search={search}
                    price_from={price_from}
                    price_to={price_to}
                    attributes={attributes}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <h5 style={{ ...css.h5, textAlign: "center" }}>
                    Sản Phẩm Bán Chạy
                  </h5>
                  <Divider />
                  <Products
                    first={4}
                    lg={3}
                    xl={3}
                    suggestions="bestSeller"
                    more={false}
                  />

                  <h5 style={{ ...css.h5, textAlign: "center" }}>
                    Sản Phẩm Mới Về
                  </h5>
                  <Divider />
                  <Products first={4} lg={3} suggestions="new" more={false} />

                  <h5 style={{ ...css.h5, textAlign: "center" }}>
                    Sản Phẩm Khuyến Mãi
                  </h5>
                  <Divider />
                  <Products first={4} lg={3} sale more={false} />
                </Fragment>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Index;
