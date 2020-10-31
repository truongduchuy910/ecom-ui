import { useRouter } from "next/router";
import { List as Posts } from "../components/Post/list";

import { toAttributeGourpWhereInput } from "../lib/chip";
import { Fragment, useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { PostSidebar as Sidebar } from "../components/Sidebar/post";
import { List as Products } from "../components/Product/list";

// import { Filter } from "../components/Post/filter";
import { SellerContext } from "../components/src/SellerProvider";

const Index = () => {
  const theme = useContext(SellerContext);
  const router = useRouter();
  let query = router.query;
  const hashtag = query.hashtag;

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
            <Sidebar />
          </Col>
          <Col xs={8} md={6} lg={7} xl={7}>
            {/* <Filter hashtag={hashtag} /> */}
            {hashtag ? (
              <Posts sm={12} lg={12} xl={12} hashtag={hashtag} />
            ) : null}
          </Col>
          <Col xs={12} md={3} lg={2} lx={1}>
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
              <Products sm={12} lg={12} xl={12} sale />
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
              <Products sm={12} lg={12} xl={12} suggestions="bestSeller" />
            </Fragment>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Index;
