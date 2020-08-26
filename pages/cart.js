import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Carts } from "../components/Cart/list";
import { List as Customer } from "../components/Customer/list";
import { Container, Row, Col } from "reactstrap";
import theme from "../components/src/theme";
const About = () => {
  return (
    <div>
      <Container
        style={{
          marginTop: 35,
          backgroundColor: theme.backgroundColor,
          paddingTop: theme.spacing(3),
        }}
      >
        <Row>
          <Col sm={4} lg={6}>
            <Customer />
          </Col>
          <Col sm={8} lg={6}>
            <Carts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
