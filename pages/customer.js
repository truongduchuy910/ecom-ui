import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Carts } from "../components/Cart/list";
import { List } from "../components/Customer/ChooseCustomer";
import { Container, Row, Col } from "reactstrap";
import { theme } from "../config/index";

const Customer = () => {
  return (
    <div>
      <Container
        style={{
          marginTop: 35,
          backgroundColor: theme.backgroundColor,
          paddingTop: theme.spacing(3),
        }}
      >
        <List />
      </Container>
    </div>
  );
};
export default Customer;
