import { useRouter } from "next/router";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Categories from "../components/Category";
import Products from "../components/Product/List/index";
import Item from "../components/Product/Item/index";
import Hashtags from "../components/Hashtag/List";
import Posts from "../components/Post/List/index";
export default function ProductDetali() {
  const router = useRouter();
  const { hashtag } = router.query;
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Hashtags
              onChoose={(hashtag) => {
                router.push({
                  pathname: "/hashtag",
                  query: { hashtag: hashtag.url },
                });
              }}
            />
          </Col>
          <Col>
            <Posts PostWhereInput={{ hashtags_some: { url: hashtag } }} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
