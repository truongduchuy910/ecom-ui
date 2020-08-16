import { Users } from "../User";
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
import { useState } from "react";
import { Search } from "../Search";
import { page } from "../../config";
export default function MenuApp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md" className="mb-3">
      <Container>
        <NavbarBrand href="/">{page.name}</NavbarBrand>

        <Link href="/">
          <a>Home</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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

          <Users />
        </Collapse>
      </Container>
    </Navbar>
  );
}
