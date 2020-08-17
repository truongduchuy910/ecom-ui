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
} from "reactstrap";
import { useState, useEffect } from "react";
import { Search } from "../Search";
import { page } from "../../config";
import { Logo } from "../src/logo";

export default function MenuApp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isFixed, setIsFixed] = useState(false);
  const pose = isFixed ? "fixed" : "init";
  useEffect(() => {
    var doc = document.documentElement;
    window.onscroll = function (e) {
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top) setIsFixed(true);
      else setIsFixed(false);
    };
  });
  return (
    <Navbar expand="md">
      <Container>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/">
                <NavLink href="/">Trang Chủ</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/products">
                <NavLink href="">Sản Phẩm</NavLink>
              </Link>
            </NavItem>

            <CategoriesDropdownMenu />

            <Search />
          </Nav>
          {/* Compare */}

          <CompareIcon />

          {/* Wishlist */}

          <WishlistIcon />

          {/* Cart */}

          <CartIcon />

          {/* Order */}

          <OrderIcon />
          <Nav>
            <Users />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
