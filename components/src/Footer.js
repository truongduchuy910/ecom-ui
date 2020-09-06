import { Container, Row, Col } from "reactstrap";
import { Box } from "./Box";
import { BirdBg } from "./BirdBg";
import { page } from "../../config/index";

import { theme } from "../../config/index";

import { css } from "../src/css";
export const Footer = () => {
  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <Container
        style={{
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
        }}
      >
        <Row>
          <Col xs={12} md={6} style={{ marginBottom: theme.spacing(4) }}>
            <h2 style={css.h2}>{page.intro.name}</h2>
            <div
              style={{
                color: theme.color,
                display: "inline",
              }}
            >
              {page.intro.content}
            </div>
          </Col>
          <Col xs={12} md={6} style={{ marginBottom: theme.spacing(4) }}>
            <h2 style={css.h2}>{page.term.name}</h2>
            <div
              style={{
                color: theme.color,
                display: "inline",
              }}
            >
              {page.term.content}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
