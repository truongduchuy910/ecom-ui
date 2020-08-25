import { Container, Row, Col } from "reactstrap";
import { Box } from "./Box";
import { BirdBg } from "./BirdBg";
import { page } from "../../config/yensaodatquang.json";
import theme from "../src/theme";
import { css } from "../src/css";
export const Footer = () => {
  return (
    <Container
      style={{
        marginBottom: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      }}
    >
      <Row>
        <Col xs={12} md={6} style={{ marginBottom: theme.spacing(4) }}>
          <h2 style={css.h2}>{page.intro.name}</h2>
          <div>{page.intro.content}</div>
        </Col>
        <Col xs={12} md={6} style={{ marginBottom: theme.spacing(4) }}>
          <h2 style={css.h2}>{page.term.name}</h2>
          <div>{page.term.content}</div>
        </Col>
      </Row>
    </Container>
  );
};
