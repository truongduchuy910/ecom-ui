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
      {/* <HeaderStory /> */}
      <div
        style={{
          width: "100%",
          borderRadius: theme.spacing(2),
          height: "60vh",
          background: "url(/hypedanang/assets/img/hype-da-nang.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
      <Feature />
      <Container>
        <h2
          style={{
            ...css.h2,
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(6),

            textAlign: "center",
          }}
        >
          Phóng Sự Báo Quốc Hội
        </h2>
        <video
          width="100%"
          height="100%"
          controls
          style={{
            marginBottom: theme.spacing(6),
            borderRadius: theme.spacing(2),
          }}
        >
          <source
            src="http://quochoitv.vn//202008/Sequence%2001.mp4"
            type="video/mp4"
          />
        </video>
      </Container>
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
