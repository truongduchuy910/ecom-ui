import { useEffect, Fragment, useContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Carts } from "../components/Cart/list";
import { List } from "../components/Customer/ChooseCustomer";
import { Container, Row, Col } from "reactstrap";
import { SellerContext } from "../components/src/SellerProvider";

const Customer = () => {
  const theme = useContext(SellerContext);
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
