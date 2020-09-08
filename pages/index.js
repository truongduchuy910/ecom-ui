import { useRouter } from "next/router";
import { List as Products } from "../components/Product/list";

import { toAttributeGourpWhereInput } from "../lib/chip";

import { Container, Row, Col } from "reactstrap";
import { Sidebar } from "../components/Sidebar";
import { theme } from "../config/index";

import { Filter } from "../components/Product/filter";

import { css } from "../components/src/css";
import { HeaderStory } from "../components/UI/HeaderStory";
import { Fragment } from "react";
import { Feature } from "../components/UI/Feature";
import { BgDivider } from "../components/UI/bgDiviver";
import { MoreProducts } from "../components/UI/moreProducts";
const Index = () => {
  return (
    <Fragment>
      <HeaderStory />

      <Feature />
      <Container>
        <Products
          first={4}
          lg={4}
          xl={4}
          sale
          more={false}
          title="Sản Phẩm Khuyến Mãi"
        />
        <MoreProducts />
      </Container>
      <BgDivider />
      <Container>
        <Products
          first={4}
          lg={3}
          xl={3}
          suggestions="bestSeller"
          more={false}
          title="Sản Phẩm Bán Chạy"
        />
        <MoreProducts />
      </Container>
    </Fragment>
  );
};
export default Index;
