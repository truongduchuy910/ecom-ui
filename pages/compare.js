import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Compares } from "../components/Compare/list";
import { Container } from "reactstrap";
const About = () => {
  return (
    <div>
      <Container style={{ marginTop: 35 }}>
        <Compares />
      </Container>
    </div>
  );
};
export default About;
