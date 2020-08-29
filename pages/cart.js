import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Cart as CartInfo } from "../components/Cart/index";
import { List as Customer } from "../components/Customer/list";
import { Container, Row, Col } from "reactstrap";
import theme from "../components/src/theme";
const Cart = () => {
  return (
    <div>
      <Container
        style={{
          marginTop: 35,
          backgroundColor: theme.backgroundColor,
          paddingTop: theme.spacing(3),
        }}
      >
        <CartInfo />
      </Container>
    </div>
  );
};
export default Cart;
