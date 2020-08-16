import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Carts } from "../components/Cart/list";
import { Index as Customer } from "../components/Customer";
import { Container } from "reactstrap";
const About = () => {
  return (
    <div>
      <Container>
        <Customer />
        <h6>Tao don</h6>
        <Carts />
      </Container>
    </div>
  );
};
export default About;
