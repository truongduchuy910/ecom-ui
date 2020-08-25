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
import { page } from "../../config/yensaodatquang.json";
import { Logo } from "../src/logo";
import { IoIosMenu, IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";
import theme from "../src/theme";
import { useSpring, animated } from "react-spring";
import { compact } from "@apollo/client/utilities";
import { MdSearch } from "react-icons/md";
export default function MenuApp({ isOpen, toggle, innerWidth }) {
  const router = useRouter();

  const css = {
    icon: {
      display: innerWidth < 768 ? "inline-block" : "none",
      fontSize: "1rem",
      padding: theme.spacing(2),
    },
  };

  const [onIn, setonIn] = useState(false);
  useEffect(() => {});
  // ANIMATION
  const inputSpring = useSpring({
    border: onIn ? "" : "none",
    display: onIn ? "inline-block" : "none",
    opacity: onIn ? 1 : 0,

    from: {
      border: !onIn ? "none" : "",
      display: !onIn ? "none" : "inline-block",
      opacity: !onIn ? 0 : 1,
    },
  });
  const h1Spring = useSpring({
    display: onIn ? "none" : "inline-block",
    opacity: onIn ? 0 : 1,
    from: {
      display: !onIn ? "none" : "inline-block",
      opacity: !onIn ? 0 : 1,
    },
  });
  const [searchInput, setSearchInput] = useState();
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: theme.backgroundColor,
        width: "100%",
        zIndex: 100,
        boxShadow: `3px 3px 15px ${theme.bgDark}`,
        padding: theme.spacing(1),
      }}
    >
      <Container style={{ padding: 0 }}>
        {/* DISPLAY IN MOBILE */}
        {innerWidth < 768 ? (
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
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
              <IoIosArrowBack />
            </Link>
            {/* ICON MENU */}
            <Link
              style={{
                ...css.icon,
                float: "right",
                marginLeft: theme.spacing(1),
                paddingRight: theme.spacing(3),
              }}
              onClick={toggle}
            >
              <IoIosMenu />
            </Link>
            {/* LOGO */}
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Form
                inline
                onSubmit={(e) => {
                  /**
                   * Prevent submit from reloading the page
                   */
                  e.preventDefault();
                  e.stopPropagation();
                  router.push({
                    pathname: "/products",
                    query: { search: searchInput },
                  });
                }}
                action=""
                style={{ display: "inline-block", width: "auto" }}
              >
                <animated.input
                  style={{
                    ...inputSpring,
                    width: "100%",
                    height: 30,
                    paddingLeft: theme.spacing(2),
                    border: `1px solid ${theme.secondary}`,
                    borderRadius: theme.spacing(1),
                  }}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
              </Form>
              <animated.h1
                style={{
                  ...h1Spring,
                  margin: 0,
                  padding: 0,
                  fontSize: "1.2rem",
                  color: theme.primary,
                  fontWeight: "bold",
                }}
                onClick={() => {
                  router.push("/");
                }}
              >
                {page.name}
              </animated.h1>
            </div>
            {/* <Search
            style={{
              padding: theme.spacing(1),
              marginLeft: theme.spacing(3),
              display: "inline-block",
            }}
          /> */}
            {/* SEARCH ICON */}
            <Link
              style={{
                ...css.icon,
              }}
              onClick={() => {
                setonIn(!onIn);
              }}
            >
              <MdSearch />
            </Link>
            {/* CART ICON */}
            <CartIcon
              style={{
                ...css.icon,
                float: "right",
                marginRight: theme.spacing(3),
              }}
            />
          </div>
        ) : null}
        <Collapse isOpen={isOpen} div>
          <Nav
            className="hide-sm"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Compare */}

            <CompareIcon page style={{ marginRight: theme.spacing(5) }} />
            {/* Wishlist */}

            <WishlistIcon page />

            {/* Order */}

            <OrderIcon page />

            <Users />
          </Nav>
        </Collapse>
      </Container>
    </div>
  );
}
