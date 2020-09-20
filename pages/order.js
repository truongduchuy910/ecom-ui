import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Orders } from "../components/Order/list";
import { Container } from "reactstrap";

const About = () => {
  return (
    <div>
      <Container>
        <Orders />
      </Container>
    </div>
  );
};
export default About;
