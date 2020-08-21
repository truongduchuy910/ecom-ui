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
import { useState, useEffect } from "react";
import { Search } from "../Search";
import { page } from "../../config.json";
import { Logo } from "../src/logo";
import { IoIosMenu } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

export default function MenuApp({ isOpen, toggle }) {
  const [isFixed, setIsFixed] = useState(false);
  const pose = isFixed ? "fixed" : "init";

  return (
    <Navbar
      expand="md"
      style={{
        position: "fixed",
        backgroundColor: "#333",
        width: "100%",
        zIndex: 100,
        boxShadow: "3px 3px 15px #333",
      }}
    >
      <Container>
        <Link href="/">
          <NavbarBrand>
            <Logo /> Shop Whey Đà Nẵng
          </NavbarBrand>
        </Link>

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
                <NavLink href="">Sản Phẩm</NavLink>
              </Link>
            </NavItem>

            <CategoriesDropdownMenu />

            <Search />
          </Nav>
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Compare */}

            <CompareIcon />

            {/* Wishlist */}

            <WishlistIcon />

            {/* Cart */}

            <CartIcon />

            {/* Order */}

            <OrderIcon />

            <Users />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
