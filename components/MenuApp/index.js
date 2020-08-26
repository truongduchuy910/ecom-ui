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
import { css } from "../src/css";
export default function MenuApp({ isOpen, toggle, innerWidth }) {
  const router = useRouter();

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
        {
          // DISPLAY IN MOBILE
          innerWidth < 768 ? (
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                height: 40,
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
                    margin: 0,
                    padding: 0,
                    fontSize: "1.3rem",
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

              {/* SEARCH ICON */}
              <Link
                style={{
                  ...css.icon,
                  marginRight: theme.spacing(2),
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
          ) : (
            // DISPLAY IN DESKTOP
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                height: 40,
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
              <Logo
                style={{ float: "left", marginLeft: theme.spacing(4) }}
                onClick={() => {
                  router.push("/");
                }}
              />
              <h1
                style={{
                  float: "left",
                  marginLeft: theme.spacing(2),
                  fontSize: "1.2rem",
                  width: 300,
                  padding: 0,
                  marginBottom: 0,
                }}
                onClick={() => {
                  router.push("/");
                }}
              >
                {page.name}
              </h1>
              {/* LOGO */}
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  textAlign: "center",
                }}
              ></div>

              {/* Wishlist */}
              <WishlistIcon page style={{ marginRight: theme.spacing(4) }} />

              {/* Compare */}
              <CompareIcon page style={{ marginRight: theme.spacing(4) }} />

              {/* CART ICON */}
              <CartIcon page style={{ marginRight: theme.spacing(4) }} />

              {/* Order */}
              <OrderIcon page style={{ marginRight: theme.spacing(4) }} />

              {/* USER ICON */}
              <Users />
            </div>
          )
        }

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
