import { CategoriesDropdownMenu as Users } from "../User/DropdownUser";
import { Icon as CartIcon } from "../Cart/icon";
import { Icon as WishlistIcon } from "../Wishlist/icon";
import { Icon as CompareIcon } from "../Compare/icon";
import { Icon as OrderIcon } from "../Order/icon";
import { CategoriesDropdownMenu } from "../Category/DropdownMenu";
import { Link } from "../src/Link";
import {
  Collapse,
  div,
  divToggler,
  divBrand,
  Nav,
  NavItem,
  divText,
  Container,
  NavLink,
  Form,
  ButtonToggle,
} from "reactstrap";
import { useState, useEffect, Fragment } from "react";
import { Search } from "../Search";
import { page } from "../../config/index";

import { Logo } from "../src/logo";
import { IoIosMenu, IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";
import theme from "../src/theme";
import { useSpring, animated } from "react-spring";
import { compact } from "@apollo/client/utilities";
import { MdSearch } from "react-icons/md";
import { css } from "../src/css";
import { useQuery, gql } from "@apollo/client";
const GET_USER = gql`
  query {
    user @client
  }
`;
export default function MenuApp() {
  const router = useRouter();
  const { data } = useQuery(GET_USER);
  const isLogin = data?.user;
  // ANIMATION

  return (
    <Container
      fluid
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        backgroundColor: theme.backgroundColor,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 40,
          width: "100%",
        }}
      >
        <Link
          style={{
            ...css.icon,
            float: "left",
          }}
          onClick={() => {
            router.back();
          }}
        >
          <IoIosArrowBack style={{ color: theme.primary }} />
        </Link>
        <Logo
          style={{ float: "left", marginLeft: theme.spacing(3) }}
          onClick={() => {
            router.push("/");
          }}
        />
        <h1
          style={{
            float: "left",
            marginLeft: theme.spacing(3),
            fontSize: "1rem",
            width: "100%",
            padding: 0,
            marginBottom: 0,
            color: theme.primary,
            fontWeight: 900,
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          {isLogin ? null : page.name}
        </h1>

        <WishlistIcon
          style={{
            float: "right",
            marginRight: theme.spacing(4),
          }}
        />
        <CartIcon
          style={{
            float: "right",
            marginRight: theme.spacing(4),
          }}
        />
        <OrderIcon
          style={{
            float: "right",
            marginRight: theme.spacing(4),
          }}
        />
        <Users />
      </div>
    </Container>
  );
}
