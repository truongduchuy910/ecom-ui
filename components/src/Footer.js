import { Container, Row, Col } from "reactstrap";
import { Box } from "./Box";
import { BirdBg } from "./BirdBg";
import { page } from "../../config/yensaodatquang.json";
export const Footer = () => {
  return (
    <Container style={{ marginBottom: 34 }}>
      <Row>
        {/* <Col sm={12} md={6}>
            <img src="/assets/img/nha-xuong.JPG" />
          </Col> */}
        <Col>
          <div>
            <h4>{page.intro.name}</h4>
            <p>{page.intro.content}</p>
          </div>
        </Col>
        <Col>
          <div>
            <h4>{page.term.name}</h4>
            <p>{page.term.content}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
