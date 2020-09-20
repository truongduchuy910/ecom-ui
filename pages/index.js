import { List as Products } from "../components/Product/list";
import { Container, Row, Col } from "reactstrap";
import { List as Banners } from "../components/Banner/list";
import { IntroBox } from "../components/IntroBox";
import { Divider } from "../components/src/Divider";
import { makeVar } from "@apollo/client";
import { Sidebar } from "../components/Sidebar";
import { useRouter } from "next/router";
import { toAttributeGourpWhereInput } from "../lib/chip";
import { Fragment } from "react";
import { Filter } from "../components/Sidebar/filter";
const customerVar = makeVar(false);
const Index = () => {
  const customer = customerVar();
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
    <div style={{ marginTop: -13 }}>
      {/*  */}
      {/* <Banners /> */}
      <Container style={{ paddingTop: 34 }} fluid>
        <Row>
          <Col xs={4} md={3} lg={2}>
            <Sidebar
              onSearch={(search) => {
                setSearch(search);
              }}
            />
          </Col>
          <Col xs={8} md={9} lg={10}>
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
            attributes ? (
              <Products
                xs={6}
                lg={3}
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
                <h2 className="text-center mt-4">Sản Phẩm Bán Chạy</h2>
                <Divider />
                <Products
                  first={4}
                  lg={3}
                  suggestions="bestSeller"
                  more={false}
                />

                <h2 className="text-center mt-4">Sản Phẩm Mới Về</h2>
                <Divider />
                <Products first={4} lg={3} suggestions="new" more={false} />

                <h2 className="text-center mt-4">Sản Phẩm Khuyến Mãi</h2>
                <Divider />
                <Products first={4} lg={3} sale more={false} />
              </Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Index;
