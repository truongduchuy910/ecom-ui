import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { List as Wishlists } from "../components/Wishlist/list";
import { Container } from "reactstrap";
const About = () => {
  return (
    <div>
      <Container style={{ marginTop: 35 }}>
        <Wishlists />
      </Container>
    </div>
  );
};
export default About;
