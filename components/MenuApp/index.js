import { CategoriesDropdownMenu as Users } from "../User/DropdownUser";
import { Icon as CartIcon } from "../Cart/icon";
import { Icon as WishlistIcon } from "../Wishlist/icon";
import { Icon as CompareIcon } from "../Compare/icon";
import { Icon as OrderIcon } from "../Order/icon";
import { CategoriesDropdownMenu } from "../Category/DropdownMenu";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
  NavLink,
  Form,
  ButtonToggle,
} from "reactstrap";
import { useState, useEffect, Fragment } from "react";
import { Search } from "../Search";
import { page } from "../../config/yensaodatquang.json";
import { Logo } from "../src/logo";
import { IoIosMenu, IoIosArrowBack } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";
import { theme } from "../../config/yensaodatquang.json";
export default function MenuApp({ isOpen, toggle }) {
  const [isFixed, setIsFixed] = useState(false);
  const pose = isFixed ? "fixed" : "init";
  const router = useRouter();
  return (
    <Navbar
      expand="md"
      style={{
        position: "fixed",
        backgroundColor: theme.backgroundColor,
        width: "100%",
        zIndex: 100,
        boxShadow: `3px 3px 15px ${theme.backgroundColor}`,
      }}
    >
      <Container>
        <NavbarBrand style={{ display: "flex", alignItems: "center" }}>
          <IoIosArrowBack
            style={{ margin: 15 }}
            onClick={() => {
              router.back();
            }}
          />
          <Logo
            onClick={() => {
              router.push("/");
            }}
          />

          {/* Compare */}
          <div className="hide-md">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 13,
              }}
            >
              <CompareIcon />

              {/* Wishlist */}

              <WishlistIcon />

              {/* Cart */}

              <CartIcon />

              {/* Order */}

              <OrderIcon />

              <Users />
            </div>
          </div>
        </NavbarBrand>

        <NavbarToggler style={{ width: 50, margin: 0, padding: 0 }}>
          <IoIosMenu
            onClick={toggle}
            style={{
              display: "inline-block",
              color: "white",
              width: "auto",
              padding: 0,
              margin: 8,
            }}
          />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/products">
                <NavLink href="">Xem Sản Phẩm</NavLink>
              </Link>
            </NavItem>

            {/* <CategoriesDropdownMenu /> */}

            <Search />
          </Nav>
          <Nav
            className="hide-sm"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Compare */}

            <CompareIcon page />

            {/* Wishlist */}

            <WishlistIcon page />

            {/* Cart */}

            <CartIcon page />

            {/* Order */}

            <OrderIcon page />

            <Users />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
